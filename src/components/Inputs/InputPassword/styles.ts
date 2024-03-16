import styled from 'styled-components'

export const ContainerInputPassword = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  display: flex;
  margin-top: 0.3rem;
`

export const ShowPassword = styled.button<{ position: string }>`
  height: 2.3rem;
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  left: ${(props) => props.position};

  background-color: transparent;
  opacity: 0.4;
  border: 0;

  cursor: pointer;
`
