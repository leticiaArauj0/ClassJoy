import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    transition: 0.1s ease all;
  }

  svg:hover {
    color: ${(props) => props.theme['purple-700']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
