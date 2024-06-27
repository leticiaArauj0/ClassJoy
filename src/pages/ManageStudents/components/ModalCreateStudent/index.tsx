import { X } from 'phosphor-react'
import { ContainerModal } from './styles'
import { Button } from '../../../../components/Button'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { StudentContext } from '../../../../contexts/student/StudentContext'
import { AuthContext } from '../../../../contexts/auth/AuthContext'
import { ModalOverlay } from '../../../../shared/styles/ModalOverlay'

interface ModalCreateProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined,
    classroomId: number
}

type CreateStudentProps = {
    name: string,
    age: number
}

export function ModalCreateStudent({ closeModal, classroomId }: ModalCreateProps) {
    const { user } = useContext(AuthContext)
    const { createStudent } = useContext(StudentContext)
    const { register, handleSubmit } = useForm<CreateStudentProps>()
    
    async function handleCreateStudent({name, age}: CreateStudentProps) {
        try {
            if (user) {
                const teacherId = user.id;
                await createStudent({ name, age, classroomId, teacherId })
            }
        } catch (error) {
            console.error("Erro ao criar aluno", error);
        }
    }

    return(
        <ModalOverlay>
            <ContainerModal>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Criar Aluno</h1>
                    <form onSubmit={handleSubmit(handleCreateStudent)}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" {...register('name')} />
                        <label htmlFor="name">Idade</label>
                        <input type="number" {...register('age')} />
                        <Button color='#77BF0B' height='2rem' width='6rem' text='Criar' />
                    </form>
            </ContainerModal>
        </ModalOverlay>
    )
}
