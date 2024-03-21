import styled from 'styled-components'

export const ContainerInput= styled.input`
  height: 2.5rem;
  width: 100%;

  background-color: ${(props) => props.theme.white};

  font-size: 1rem;
  font-family: 'Open Sans';

  padding: 0.5rem 1.5rem;
  position: absolute;

  border-radius: 10px;
  border: 1.5px solid ${(props) => props.theme['purple-400']};

  outline-color: ${(props) => props.theme['purple-400']};
`
