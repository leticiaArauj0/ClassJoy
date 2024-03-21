import styled from 'styled-components'

export const ContainerIcon = styled.div<{ position?: string }>`
  height: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 1rem;
  left: calc(100% - 4rem);
  bottom: 5px;

  color: #131313;

  position: relative;
`
