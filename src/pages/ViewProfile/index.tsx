import { LockKey, SignOut, Trash } from 'phosphor-react'
import { ContainerCardInfo, ContainerCardPerfil } from './styles/ContainerCard'
import { MainViewProfile } from './styles/MainViewProfile'
import { ContainerPhoto } from './styles/ContainerPhoto'
import { Button } from '../../components/Button'
import { ContainerFormUpdate } from './styles/ContainerFormUpdate'
import { InputUpdate } from '../../components/Inputs/InputUpdate/index'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'
import { Arrow } from '../../components/Arrow'
import { Photo } from '../../components/Photo'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { updateFormValidationSchema } from '../../shared/validation/schemas/updateFormValidationSchema'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'
import { ErrorMessage } from '../../components/ErrorMessage/'
import { useNavigate } from 'react-router-dom'

export type FormUpdate = zod.infer<typeof updateFormValidationSchema>

export function ViewProfile() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormUpdate>({
    resolver: zodResolver(updateFormValidationSchema),
    defaultValues: {
      firstName: auth.user?.first_name,
      lastName: auth.user?.last_name,
      email: auth.user?.email
    }
  })
  const firstNameError = errors.firstName?.message
  const lastNameError = errors.lastName?.message
  const emailError = errors.email?.message

  async function handleUpdate({ 
    firstName,
    lastName,
    email 
  }: FormUpdate) {
    await api.patch(`/users/${auth.user?.id}`, {
      first_name: firstName,
      last_name: lastName,
      email,
    })
    location.reload()
  }

  useEffect(() => {
    if(auth.user){
      setValue('firstName', auth.user.first_name)
      setValue('lastName', auth.user.last_name)
      setValue('email', auth.user.email)
    }
  }, [auth.user])

  const handleLogout = async () => {
    await auth.logout()
    navigate('/')
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
            <li className="logout" onClick={handleLogout}>
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
                    registerProps={register('email')}
                  />
                  <ErrorMessage menssage={emailError} />
                </ContainerInputError>
            </ContainerFormUpdate>
            <Button height="2rem" width="6rem" color="#00B8F0" text="Salvar" type="submit" />
          </form>
        </ContainerCardInfo>
      </div>
    </MainViewProfile>
  )
}
