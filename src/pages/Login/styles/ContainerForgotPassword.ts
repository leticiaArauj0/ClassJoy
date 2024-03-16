import { styled } from 'styled-components'

export const ContainerForgetPassword = styled.div`
  margin: 0.5rem 0;

  a {
    text-decoration: none;
  }

  strong {
    color: ${(props) => props.theme['green-500']};
    font-size: 0.9rem;
    padding: 0 0.5rem;
    cursor: pointer;
  }

  strong:hover {
    text-decoration-line: underline;
  }
`
