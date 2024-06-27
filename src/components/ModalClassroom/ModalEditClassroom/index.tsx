import { X } from 'phosphor-react'
import { ContainerModal } from '../../../pages/Classroom/styles/ContainerModal'
import { Button } from '../../Button'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { ClassroomContext } from '../../../contexts/classroom/ClassroomContext'
import { ModalOverlay } from '../../../shared/styles/ModalOverlay'

interface ModalEditProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined,
    id: number,
    name: string
}

type EditClassroomProps = {
    name: string,
}

export function ModalEditClassroom({ closeModal, name, id }: ModalEditProps) {
    const { editClassroom } = useContext(ClassroomContext)
    const { register, handleSubmit, setValue, reset } = useForm<EditClassroomProps>()
    async function handleEditClassroom({name}: EditClassroomProps) {
        editClassroom({ id, name })
        reset()
    }

    useEffect(() => {
        setValue('name', name)
    }, [])

    return(
        <ModalOverlay>
            <ContainerModal height='16rem'>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Editar Turma</h1>
                    <form onSubmit={handleSubmit(handleEditClassroom)}>
                        <span className='spanEdit'>Deseja salvar alterações?</span>
                        <label className='labelEdit' htmlFor="name">Nome</label>
                        <input type="text" {...register('name')} />
                        <div className="button">
                            <Button color='#00B8F0' height='2rem' width='6rem' text='Salvar' />
                            <Button color='#FC6647' height='2rem' width='6rem' text='Cancelar' onClick={closeModal} type='button' />
                        </div>
                    </form>
            </ContainerModal>
        </ModalOverlay>
    )
}
