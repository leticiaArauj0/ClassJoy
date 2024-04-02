import { ContainerErrorMessage } from './styles'

interface ErrorMenssageProps {
  menssage: string | undefined
}

export function ErrorMessage({ menssage }: ErrorMenssageProps) {
  return (
    <ContainerErrorMessage display={menssage ? 'inline' : 'none'}>
      {menssage}
    </ContainerErrorMessage>
  )
}
