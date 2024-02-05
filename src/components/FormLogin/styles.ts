import styled from 'styled-components'

export const LoginContainer = styled.div`
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

  main {
    height: 85%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1rem;

    .logo {
      height: 10rem;
    }

    h1 {
      color: ${(props) => props.theme['green-700']};
      font-family: 'Signika';
      font-weight: 600;
    }
  }
`

export const FormContainer = styled.div`
  color: ${(props) => props.theme.black};

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  input {
    height: 2.5rem;
    width: 22rem;

    background-color: rgba(217, 217, 217, 0.53);

    font-size: 1rem;
    font-family: 'Open Sans';

    padding: 0.5rem 3rem;

    border-radius: 10px;
    border: none;
    outline-color: ${(props) => props.theme['purple-300']};
  }

  .input-email {
    input {
      position: absolute;
      width: 22rem;
    }

    .icon-email {
      height: 2.3rem;
      width: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      padding-left: 1rem;

      position: relative;
    }
  }

  .passwordField {
    flex-direction: row;

    input {
      position: absolute;
      width: 22rem;
    }

    .icon-password,
    button {
      height: 2.3rem;
      width: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
    }

    .icon-password {
      padding-left: 1rem;
    }

    button {
      left: 16.5rem;

      background-color: transparent;
      opacity: 0.4;
      border: 0;

      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  strong {
    cursor: pointer;
    color: ${(props) => props.theme['green-400']};
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  strong:hover {
    text-decoration-line: underline;
  }
`

export const ContainerButton = styled.div`
  width: 22rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 2rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 11rem;
    text-decoration: none;
  }
`
