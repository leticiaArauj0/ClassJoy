import styled from 'styled-components'

export const ContainerRegisterTeacher = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  .arrow-left {
    margin: 1rem 0 0 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-400']};
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
    gap: 1rem;

    padding: 0 1rem;

    .logo {
      height: 8rem;
    }

    h1 {
      color: ${(props) => props.theme['green-700']};
      font-family: 'Signika';
      font-weight: 600;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 0.3rem;

    .or {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .line {
      width: 150px;
      border-bottom: 1px solid ${(props) => props.theme.black};
    }
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    height: 2.3rem;
    width: 22rem;

    background-color: rgba(217, 217, 217, 0.53);

    font-size: 1rem;
    font-family: 'Open Sans';

    padding: 0.5rem 1rem;

    border-radius: 10px;
    border: none;
    outline-color: ${(props) => props.theme['purple-300']};
  }

  .passwordField {
    input {
      position: absolute;
      width: 22rem;
    }

    button {
      height: 2.3rem;

      display: flex;
      align-items: center;

      position: relative;
      left: 19rem;

      background-color: transparent;
      opacity: 0.4;
      border: 0;

      cursor: pointer;
    }
  }

  div {
    display: flex;
    gap: 0.4rem;
  }

  input[type='checkbox'] {
    width: 1rem;
  }

  .terms {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0 0 0.2rem;
  }
`
