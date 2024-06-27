import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { api } from "../../lib/axios";

interface Classroom {
    id: number,
    idTeacher: number,
    name: string
}

interface CreateClassroomInput {
    name: string
}

interface EditClassroomInput {
    id: number
    name: string
}

interface DeleteClassroomInput {
    id: number
}

interface ClassroomContextType {
    classrooms: Classroom[],
    createClassroom: (data: CreateClassroomInput) => Promise<void>
    deleteClassroom: (data: DeleteClassroomInput) => Promise<void>
    editClassroom: (data: EditClassroomInput) => Promise<void>
}

interface ClassroomsProviderProps {
    children: ReactNode
}

export const ClassroomContext = createContext({} as ClassroomContextType)

export function ClassroomProvider({ children }: ClassroomsProviderProps) {
    const auth = useContext(AuthContext);
    const [classrooms, setClassrooms] = useState<Classroom[]>([]);

    async function listClassroom() {
        try {
            if (auth.user) {
                const teacherId = auth.user.id;
                const response = await api.get(`/classroom/${teacherId}`);
                setClassrooms(response.data);
            }
        } catch (error) {
            console.error("Erro ao listar salas de aula:", error);
        }
    }

    async function createClassroom({ name }: CreateClassroomInput) {
        const response = await api.post(`/classroom/${auth.user?.id}`, {
            name,
        })

        setClassrooms(state => [response.data, ...state])
    }

    async function editClassroom({ id, name }: EditClassroomInput) {
        await api.patch(`/classroom/${id}`, {
            name,
        })

        listClassroom();
    }

    async function deleteClassroom({ id } : DeleteClassroomInput) {
        await api.delete(`/classroom/${id}`)

        listClassroom();
    }

    useEffect(() => {
        listClassroom();
    }, [auth.user]);

    return (
        <ClassroomContext.Provider value={{ classrooms, createClassroom, deleteClassroom, editClassroom }}>
            {children}
        </ClassroomContext.Provider>
    );
}
