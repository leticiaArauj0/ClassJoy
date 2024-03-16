import { AsideContainer } from './styles'

interface AsideProps {
  imgSrc: string
  text: string
}

export function Aside({ imgSrc, text }: AsideProps) {
  return (
    <AsideContainer>
      <img src={imgSrc} alt="" />
      <strong>{text}</strong>
    </AsideContainer>
  )
}
