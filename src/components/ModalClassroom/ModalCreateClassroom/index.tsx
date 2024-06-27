import { X } from 'phosphor-react'
import { ContainerModal } from '../../../pages/Classroom/styles/ContainerModal'
import { Button } from '../../Button'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ClassroomContext } from '../../../contexts/classroom/ClassroomContext'
import { ModalOverlay } from '../../../shared/styles/ModalOverlay'

interface ModalCreateProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}

type CreateClassroomProps = {
    name: string
}

export function ModalCreateClassroom({ closeModal }: ModalCreateProps) {
    const { createClassroom } = useContext(ClassroomContext)
    const { register, handleSubmit, reset } = useForm<CreateClassroomProps>()
    
    async function handleCreateClassroom({name}: CreateClassroomProps) {
        await createClassroom({name})
        reset()
    }

    return(
        <ModalOverlay>
            <ContainerModal height='15rem'>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Criar Turma</h1>
                    <form onSubmit={handleSubmit(handleCreateClassroom)}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" {...register('name')} />
                        <Button color='#77BF0B' height='2rem' width='6rem' text='Criar' />
                    </form>
            </ContainerModal>
        </ModalOverlay>
    )
}
