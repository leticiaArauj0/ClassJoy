import styled from 'styled-components'

export const ContainerForgotPassword = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  .arrow-left {
    margin: 1rem 0 0 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-600']};
  }

  a:hover {
    opacity: 0.7;
    transition: 0.3s ease all;
  }

  .logo {
    height: 10rem;
  }

  main {
    height: 85%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1rem;

    h1 {
      color: ${(props) => props.theme.black};
      font-family: 'Signika';
      font-weight: 700;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    display: inline;

    main {
      height: 85vh;
      width: 100vw;
    }

    aside {
      display: none;
    }
  }
`

export const FormContainer = styled.div`
  width: 24rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-family: 'Open Sans';
    font-weight: 300;
  }

  input {
    height: 2.5rem;
    width: 100%;

    background-color: rgba(217, 217, 217, 0.53);

    font-size: 1rem;
    font-family: 'Open Sans';

    padding: 0.5rem 1rem;

    border-radius: 10px;
    border: none;
    outline-color: ${(props) => props.theme['purple-300']};
  }
`
