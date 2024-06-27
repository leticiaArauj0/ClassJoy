import { useContext } from "react"
import { Button } from "../../../../components/Button"
import { ModalOverlay } from "../../../../shared/styles/ModalOverlay"
import { ContainerModal } from "./ContainerModal"
import { StudentContext } from "../../../../contexts/student/StudentContext"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../../contexts/auth/AuthContext"
import { X } from "phosphor-react"

interface ModalConnectProps {
    closeModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}

interface ConnectParentProps {
    id: number,
    parentsId: number,
}

export function ModalConnect({ closeModal }: ModalConnectProps) {
    const { user } = useContext(AuthContext)
    const { connectParent } = useContext(StudentContext)
    const { register, handleSubmit, reset } = useForm<ConnectParentProps>()
    
    async function handleConnect({ id }: ConnectParentProps) {
        if(user?.id) {
            await connectParent({
                parentsId: user.id,
                id,
            })
        }
        
        reset()
    }

    return(
        <ModalOverlay>
            <ContainerModal height='15rem'>
                <button className='close' onClick={closeModal}><X size={24} /></button>
                <h1>Conectar Filho</h1>
                    <form onSubmit={handleSubmit(handleConnect)}>
                        <label htmlFor="cod">Código</label>
                        <input type="number" {...register('id')} />
                        <Button color='#77BF0B' height='2rem' width='6rem' text='Conectar' />
                    </form>
            </ContainerModal>
        </ModalOverlay>
    )
}
