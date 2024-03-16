import styled from 'styled-components'

export const ContainerDefaultLayout = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 7fr;

  background-color: ${(props) => props.theme['purple-700']};
`
