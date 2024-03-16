import { ContainerErrorMenssage } from './styles'

interface ErrorMenssageProps {
  menssage: string | undefined
}

export function ErrorMenssage({ menssage }: ErrorMenssageProps) {
  return (
    <ContainerErrorMenssage display={menssage ? 'inline' : 'none'}>
      {menssage}
    </ContainerErrorMenssage>
  )
}
