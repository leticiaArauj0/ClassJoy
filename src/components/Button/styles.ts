import styled from 'styled-components'

export const ContainerButton = styled.button<{
  background: string
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.background};

  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;

  margin-top: 0.5rem;

  border: 0;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }
`
