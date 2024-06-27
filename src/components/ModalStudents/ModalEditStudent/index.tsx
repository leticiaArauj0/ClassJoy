import { X } from 'phosphor-react'
import { Button } from '../../Button'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { StudentContext } from '../../../contexts/student/StudentContext'
import { ContainerEditModal } from './styles'
import { ModalOverlay } from '../../../shared/styles/ModalOverlay'

interface ModalEditProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined,
    id: number,
    name: string,
    age: number
}

type EditStudentProps = {
    name: string,
    age: number
}

export function ModalEditStudent({ closeModal, name, age, id }: ModalEditProps) {
    const { editStudent } = useContext(StudentContext)
    const { register, handleSubmit, setValue, reset } = useForm<EditStudentProps>()
    async function handleEditClassroom({name, age}: EditStudentProps) {
        editStudent({ id, name, age })
        reset()
    }

    useEffect(() => {
        setValue('name', name)
        setValue('age', age)
    }, [])

    return(
        <ModalOverlay>
            <ContainerEditModal >
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Editar Aluno</h1>
                <form onSubmit={handleSubmit(handleEditClassroom)}>
                    <span className='spanEdit'>Deseja salvar alterações?</span>
                    <label className='labelEdit' htmlFor="name">Nome</label>
                    <input type="text" {...register('name')} />
                    <label className='labelEdit' htmlFor="age">Idade</label>
                    <input type="number" {...register('age')} />
                    <div className="button">
                        <Button color='#00B8F0' height='2rem' width='6rem' text='Salvar' />
                        <Button color='#FC6647' height='2rem' width='6rem' text='Cancelar' onClick={closeModal} type='button' />
                    </div>
                </form>
            </ContainerEditModal>
        </ModalOverlay>
    )
}
