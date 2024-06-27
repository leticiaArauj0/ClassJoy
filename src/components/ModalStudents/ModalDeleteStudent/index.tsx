import { X } from 'phosphor-react'
import { ContainerModal } from '../../../pages/Students/styles/ContainerModal'
import { Button } from '../../Button'
import { useContext } from 'react'
import { StudentContext } from '../../../contexts/student/StudentContext'
import { ModalOverlay } from '../../../shared/styles/ModalOverlay'

interface ModalDeleteProps {
    id: number,
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function ModalDeleteStudent({ closeModal, id }: ModalDeleteProps) {
    const { deleteStudent } = useContext(StudentContext)
    
    async function handleDeleteStudent() {
        deleteStudent({id})
    }

    return(
        <ModalOverlay>
            <ContainerModal>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Excluir Aluno</h1>
                <div className="body">
                    <span>Você tem certeza que deseja excluir Aluno?</span>
                    <div className="button">
                        <Button color='#FC6647' height='2rem' width='4.5rem' text='Sim' onClick={handleDeleteStudent} />
                        <Button color='#77BF0B' height='2rem' width='4.5rem' text='Não' onClick={closeModal} />
                    </div>
                </div>
            </ContainerModal>
        </ModalOverlay>
    )
}
