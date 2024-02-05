import { AsideWelcome } from '../../components/AsideWelcome'
import { FormLogin } from '../../components/FormLogin'
import { ContainerLoginParents } from './styles'

export function LoginAsParents() {
  return (
    <ContainerLoginParents>
      <AsideWelcome
        imgUrl="src\assets\boy-studying.svg"
        text="Otimize suas atividades  diversificando as abordagens"
      />

      <FormLogin registerLink={'/cadastrar-responsavel'} />
    </ContainerLoginParents>
  )
}
