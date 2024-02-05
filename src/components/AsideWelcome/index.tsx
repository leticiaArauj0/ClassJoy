import { AsideContainer } from './styles'

interface AsideWelcomeProps {
  imgUrl?: string
  text?: string
}

export function AsideWelcome({ imgUrl, text }: AsideWelcomeProps) {
  return (
    <AsideContainer>
      <img src={imgUrl} alt="" />
      <strong>{text}</strong>
    </AsideContainer>
  )
}
