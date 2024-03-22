import styled from 'styled-components'

export const ContainerArrow = styled.div`
  margin: 1rem 0 0 1rem;
  position: relative;
  z-index: 1;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-600']};
  }

  a:hover {
    opacity: 0.7;
    transition: 0.3s ease all;
  }
`
