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
import { updateFormValidationSchema } from '../../shared/validation/schemas/updateFormValidationSchema'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'
import { ErrorMessage } from '../../components/ErrorMessage/'
import { NavLink, useNavigate } from 'react-router-dom'

export type FormUpdate = zod.infer<typeof updateFormValidationSchema>

export function ViewProfile() {
  const { editUser, logout, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isDirty }, setValue } = useForm<FormUpdate>({
    resolver: zodResolver(updateFormValidationSchema),
    defaultValues: {
      firstName: user?.first_name,
      lastName: user?.last_name,
      email: user?.email
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
    await editUser({ firstName, lastName, email })
  }

  useEffect(() => {
    if(user){
      setValue('firstName', user.first_name)
      setValue('lastName', user.last_name)
      setValue('email', user.email)
    }
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  let role
  if(user?.role == 'teacher') {
    role = true
  }

  return (
    <MainViewProfile>
      <div className="background"></div>
      {role ? <Arrow navLink="/user/dashboard-professor" /> : <Arrow navLink="/user-parents/dashboard-parents" />}
      

      <div className="container">
        <ContainerCardPerfil width="30%">
          <ContainerPhoto>
            <Photo height="6.5rem" camera="flex" imgUrl="https://www.gov.br/cdn/sso-status-bar/src/image/user.png" border='2px solid #00B8F0' />
            <strong>
              {user?.first_name} {user?.last_name}
            </strong>
            <span>
              <strong>Email:</strong> {user?.email}
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
            <NavLink to="/recuperar-senha">
              <li>
                  <LockKey size={24} />
                  <span>Mudar senha</span>
              </li>
            </NavLink>
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
                      <ErrorMessage message={firstNameError} />
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
                      <ErrorMessage message={lastNameError} />
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
                  <ErrorMessage message={emailError} />
                </ContainerInputError>
            </ContainerFormUpdate>
            <Button height="2rem" width="6rem" color="#00B8F0" text="Salvar" type="submit" disabled={!isDirty} />
          </form>
        </ContainerCardInfo>
      </div>
    </MainViewProfile>
  )
}
