import { X } from 'phosphor-react'
import { ContainerModal } from '../../../pages/Classroom/styles/ContainerModal'
import { Button } from '../../Button'
import { useContext } from 'react'
import { ClassroomContext } from '../../../contexts/classroom/ClassroomContext'
import { ModalOverlay } from '../../../shared/styles/ModalOverlay'

interface ModalDeleteProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined,
    id: number
}

export function ModalDeleteClassroom({ closeModal, id }: ModalDeleteProps) {
    const { deleteClassroom } = useContext(ClassroomContext)
    
    async function handleDeleteClassroom() {
        deleteClassroom({id})
    }

    return(
        <ModalOverlay>
            <ContainerModal height='15rem'>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Excluir Turma</h1>
                <div className="body">
                    <span>Você tem certeza que deseja excluir turma?</span>
                    <div className="button">
                        <Button color='#FC6647' height='2rem' width='4.5rem' text='Sim' onClick={handleDeleteClassroom} />
                        <Button color='#77BF0B' height='2rem' width='4.5rem' text='Não' onClick={closeModal} />
                    </div>
                </div>
            </ContainerModal>
        </ModalOverlay>
    )
}
