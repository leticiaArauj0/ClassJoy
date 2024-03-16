import styled from 'styled-components'

export const ContainerErrorMenssage = styled.span<{ display: string }>`
  color: ${(props) => props.theme['red-400']};
  display: ${(props) => props.display};
  font-size: 0.7rem;
  font-weight: bold;
  padding-left: 0.2rem;
`
