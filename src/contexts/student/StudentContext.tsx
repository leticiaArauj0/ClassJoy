import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "../auth/AuthContext"
import { api } from "../../lib/axios"
import { IdClassroomContext } from "../idClassroom/IdClassroomContext"

interface Student {
    id: number,
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

interface CreateStudentInput {
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

interface EditStudentInput {
    id: number,
    name: string,
    age: number
}

interface ConnectParentInput {
    id: number,
    parentsId: number,
}

interface DeleteStudentInput {
    id: number
}

interface StudentContextType {
    students: Student[],
    studentsClassroom: Student[],
    createStudent: (data: CreateStudentInput) => Promise<void>
    editStudent: (data: EditStudentInput) => Promise<void>
    deleteStudent: (data: DeleteStudentInput) => Promise<void>
    connectParent: (data: ConnectParentInput) => Promise<void>
}

interface StudentProviderProps {
    children: ReactNode
}

export const StudentContext = createContext({} as StudentContextType)

export function StudentProvider({ children }: StudentProviderProps) {
    const auth = useContext(AuthContext)
    const { classroomId } = useContext(IdClassroomContext)
    const [students, setStudents] = useState<Student[]>([])
    const [studentsClassroom, setStudentsClassroom] = useState<Student[]>([])

    async function listTeacherStudents() {
        try {
            if (auth.user) {
                const userId = auth.user.id;
                if(auth.user.role == 'teacher') {
                    const response = await api.get(`/student/teacher/${userId}`)
                    setStudents(response.data);
                } else if (auth.user.role == 'parents') {
                    const response = await api.get(`/student/parents/${userId}`)
                    setStudents(response.data);
                }
                listClassroomStudents()
            }
        } catch (error) {
            console.error("Erro ao listar alunos:", error);
        }
    }

    async function listClassroomStudents() {
        try {
            if(classroomId) {
                const response = await api.get(`/student/classroom/${classroomId}`)
                setStudentsClassroom(response.data)
            } 
        } catch (error) {
            console.error("Erro ao listar alunos:", error);
        }
    }

    async function createStudent({ name, age, teacherId, classroomId}: CreateStudentInput) {
        const response = await api.post(`/student`, {
            name,
            age,
            teacherId,
            classroomId,
        })

        setStudents(state => [response.data, ...state])
        listTeacherStudents()
    }

    async function editStudent({ id, name, age }: EditStudentInput) {
        await api.patch(`/student/${id}`, {
            name,
            age,
        })

        listTeacherStudents();
    }

    async function connectParent({id, parentsId}: ConnectParentInput) {
        await api.patch(`/student/connect/${id}`, {
            parentsId
        })
    }

    async function deleteStudent({ id } : DeleteStudentInput) {
        await api.delete(`/student/${id}`)

        listTeacherStudents()
    }

    useEffect(() => {
        listTeacherStudents()
    }, [auth.user, classroomId])

    return (
        <StudentContext.Provider value={{ students, createStudent, editStudent, deleteStudent, studentsClassroom, connectParent }}>
            {children}
        </StudentContext.Provider>
    )
}
