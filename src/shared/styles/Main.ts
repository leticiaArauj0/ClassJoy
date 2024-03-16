import styled from 'styled-components'

export const Main = styled.main`
  height: 85%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1rem;

  span {
    font-weight: 400;
  }

  .logo {
    height: 10rem;
  }

  .logo-cadastro {
    height: 8rem;
  }

  h1 {
    color: ${(props) => props.theme['green-700']};
    font-family: 'Signika';
    font-weight: 600;
  }
`
