import styled from 'styled-components'

export const ContainerIcon = styled.div<{ position?: string }>`
  height: 2.3rem;
  width: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 1rem;
  left: ${(props) => props.position};

  position: relative;
`
