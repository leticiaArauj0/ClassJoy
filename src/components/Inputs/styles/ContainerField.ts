import styled from 'styled-components'

export const ContainerField = styled.input<{
  outlineColor: string
  borderColor: string
}>`
  height: 2.5rem;
  width: 100%;

  background-color: rgba(217, 217, 217, 0.53);

  font-size: 1rem;
  font-family: 'Open Sans';

  padding: 0.5rem 3rem;
  position: absolute;

  border-radius: 10px;
  border: 1.5px solid ${(props) => props.borderColor};

  outline-color: ${(props) => props.outlineColor};
`
