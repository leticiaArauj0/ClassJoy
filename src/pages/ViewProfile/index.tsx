import { Camera, LockKey, SignOut, Trash } from 'phosphor-react'
import { ContainerCardInfo, ContainerCardPerfil } from './styles/ContainerCard'
import { MainViewProfile } from './styles/MainViewProfile'
import { ContainerPhoto } from './styles/ContainerPhoto'
import { Button } from '../../components/Button'
import { ContainerFormUpdate } from './styles/ContainerFormUpdate'
import { InputUpdate } from '../../components/Inputs/InputUpdate/index'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'
import { Arrow } from '../../components/Arrow'

export function ViewProfile() {
  const auth = useContext(AuthContext)

  return (
    <MainViewProfile>
      <Arrow navLink="/user/dashboard-professor" />
      <div className="container">
        <ContainerCardPerfil width="30%">
          <ContainerPhoto>
            <div className="photo">
              <img
                src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png"
                alt=""
              />
              <div className="camera">
                <Camera size={16} weight="fill" />
              </div>
            </div>
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
          <ContainerFormUpdate>
            <h1>Informações Pessoais</h1>
            <div className="container-name">
              <div className="container-label">
                <label htmlFor="">Nome</label>
                <InputUpdate
                  width="15%"
                  position="55%"
                  icon="user"
                  outlineColor="#00B8F0"
                  borderColor="#00B8F0"
                  value={auth.user?.first_name}
                />
              </div>
              <div className="container-label">
                <label htmlFor="">Segundo Nome</label>
                <InputUpdate
                  width="15%"
                  position="55%"
                  icon="user"
                  outlineColor="#00B8F0"
                  borderColor="#00B8F0"
                  value={auth.user?.last_name}
                />
              </div>
            </div>
            <label htmlFor="">E-mail</label>
            <InputUpdate
              width="30.5%"
              position="78%"
              icon="email"
              outlineColor="#00B8F0"
              borderColor="#00B8F0"
              value={auth.user?.email}
            />
          </ContainerFormUpdate>
          <div className="container-button">
            <Button height="2rem" width="6rem" color="#00B8F0" text="Salvar" />
          </div>
        </ContainerCardInfo>
      </div>
    </MainViewProfile>
  )
}
