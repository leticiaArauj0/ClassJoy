import { LockKey, SignOut, Trash } from 'phosphor-react'
import { ContainerCardInfo, ContainerCardPerfil } from './styles/ContainerCard'
import { MainViewProfile } from './styles/MainViewProfile'
import { ContainerPhoto } from './styles/ContainerPhoto'
import { Button } from '../../components/Button'
import { ContainerFormUpdate } from './styles/ContainerFormUpdate'
import { InputUpdate } from '../../components/Inputs/InputUpdate/index'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'
import { Arrow } from '../../components/Arrow'
import { Photo } from '../../components/Photo'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { updateFormValidationSchema } from '../../shared/validation/schemas/updateFormValidationSchema'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'
import { ErrorMessage } from '../../components/ErrorMessage'

export type FormUpdate = zod.infer<typeof updateFormValidationSchema>

export function ViewProfile() {
  const auth = useContext(AuthContext)
  const { register, handleSubmit, formState } = useForm<FormUpdate>({
    resolver: zodResolver(updateFormValidationSchema),
  })
  const firstNameError = formState.errors.firstName?.message
  const lastNameError = formState.errors.lastName?.message
  const emailError = formState.errors.email?.message

  async function handleUpdate({
    firstName,
    lastName,
    email,
  }: FormUpdate) {
    await api.patch(`/users/${auth.user?.id}`, {
      first_name: firstName,
      last_name: lastName,
      email,
    })

    location.reload()
  }

  return (
    <MainViewProfile>
      <div className="background"></div>
      <Arrow navLink="/user/dashboard-professor" />

      <div className="container">
        <ContainerCardPerfil width="30%">
          <ContainerPhoto>
            <Photo height="6.5rem" camera="flex" imgUrl="https://www.gov.br/cdn/sso-status-bar/src/image/user.png" border='2px solid #00B8F0' />
            <strong>
              {auth.user?.first_name} {auth.user?.last_name}
            </strong>
            <span>
              <strong>Email:</strong> {auth.user?.email}
            </span>
          </ContainerPhoto>
          <ul>
            <li className="delete">
              <Trash size={24} />
              <span>Excluir</span>
            </li>
            <li>
              <SignOut size={24} />
              <span>Sair</span>
            </li>
            <li>
              <LockKey size={24} />
              <span>Mudar senha</span>
            </li>
          </ul>
        </ContainerCardPerfil>

        <ContainerCardInfo width="40%">
          <form action="" onSubmit={handleSubmit(handleUpdate)}>
            <ContainerFormUpdate>
              <h1>Informações Pessoais</h1>
              
                <div className="container-name">
                  <div className="container-label">
                    <label htmlFor="">Nome</label>
                    <ContainerInputError margin={firstNameError ? '0' : '0.6rem'}>
                      <InputUpdate
                        icon="user"
                        outlineColor={firstNameError ? '#fc6647' : '#00B8F0'}
                        borderColor={firstNameError ? '#fc6647' : '#00B8F0'}
                        value={auth.user?.first_name}
                        registerProps={register('firstName')}
                      />
                      <ErrorMessage menssage={firstNameError} />
                    </ContainerInputError>
                  </div>
                  <div className="container-label">
                    <label htmlFor="">Segundo Nome</label>
                    <ContainerInputError margin={lastNameError ? '0' : '0.6rem'}>
                      <InputUpdate
                        icon="user"
                        outlineColor={lastNameError ? '#fc6647' : '#00B8F0'}
                        borderColor={lastNameError ? '#fc6647' : '#00B8F0'}
                        value={auth.user?.last_name}
                        registerProps={register('lastName')}
                      />
                      <ErrorMessage menssage={lastNameError} />
                    </ContainerInputError>
                  </div>
                </div>
                
                <label htmlFor="">E-mail</label>
                <ContainerInputError margin={emailError ? '0' : '0.6rem'}>
                  <InputUpdate
                    icon="email"
                    outlineColor={emailError ? '#fc6647' : '#00B8F0'}
                    borderColor={emailError ? '#fc6647' : '#00B8F0'}
                    value={auth.user?.email}
                    registerProps={register('email')}
                  />
                  <ErrorMessage menssage={emailError} />
                </ContainerInputError>
            </ContainerFormUpdate>
            <div className="container-button">
              <Button height="2rem" width="6rem" color="#00B8F0" text="Salvar" type="submit" />
            </div>
          </form>
        </ContainerCardInfo>
      </div>
    </MainViewProfile>
  )
}
