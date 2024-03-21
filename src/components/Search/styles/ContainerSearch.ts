import styled from 'styled-components'

export const ContainerSearch = styled.div<{ width?: string }>`
  height: 3rem;
  width: ${(props) => props.width};
  display: flex;
  position: relative;
`
