import { ContainerErrorMessage } from './styles'

interface ErrorMenssageProps {
  message: string | undefined
}

export function ErrorMessage({ message }: ErrorMenssageProps) {
  return (
    <ContainerErrorMessage display={message ? 'inline' : 'none'}>
      {message}
    </ContainerErrorMessage>
  )
}
