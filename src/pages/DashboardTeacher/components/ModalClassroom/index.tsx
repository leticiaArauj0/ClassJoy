import { useEffect, useRef, useState } from "react";
import { Folder, PencilSimple, Trash } from "phosphor-react";
import { ContainerModal } from "./styles";
import { ModalDeleteClassroom } from "../../../../components/ModalClassroom/ModalDeleteClassroom";
import { ModalEditClassroom } from "../../../../components/ModalClassroom/ModalEditClassroom";

interface ModalClassroomProps {
  onClose: () => void,
  name: string,
  id: number
}

export function ModalClassroom({ onClose, name, id }: ModalClassroomProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [onClose])

  return (
      <ContainerModal ref={modalRef}>
        <span>
          <Folder size={32} weight="light" />
          <strong>Arquivar</strong>
        </span>
        <div className="line"></div>
        <span onClick={() => {setOpenEditModal(true)}}>
          <PencilSimple size={32} weight="light" />
          <strong>Alterar</strong>
        </span>
        <div className="line"></div>
        <span className="delete" onClick={() => {setOpenDeleteModal(true)}}>
          <Trash size={32} color="#FC6647" weight="light" />
          <strong>Excluir</strong>
        </span>

        {openDeleteModal && <ModalDeleteClassroom id={id} closeModal={() => {setOpenDeleteModal(false)}} />}
        {openEditModal && <ModalEditClassroom name={name} id={id} closeModal={() => {setOpenEditModal(false)}} />}
      </ContainerModal>
  )
}
