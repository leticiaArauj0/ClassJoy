import { useEffect, useRef, useState } from "react";
import { PencilSimple, Trash } from "phosphor-react";
import { ContainerModal } from './styles';
import { ModalDeleteStudent } from "../ModalDeleteStudent";
import { ModalEditStudent } from "../ModalEditStudent";

interface ModalClassroomProps {
  onClose: () => void,
  name: string,
  age: number,
  id: number
}

export function PopUpStudent({ onClose, name, id, age }: ModalClassroomProps) {
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
        <span onClick={() => {setOpenEditModal(true)}}>
          <PencilSimple size={32} weight="light" />
          <strong>Alterar</strong>
        </span>
        <div className="line"></div>
        <span className="delete" onClick={() => {setOpenDeleteModal(true)}}>
          <Trash size={32} color="#FC6647" weight="light" />
          <strong>Excluir</strong>
        </span>

        {openDeleteModal && <ModalDeleteStudent id={id} closeModal={() => {setOpenDeleteModal(false)}} />}
        {openEditModal && <ModalEditStudent name={name} id={id} age={age} closeModal={() => {setOpenEditModal(false)}} />}
      </ContainerModal>
  )
}
