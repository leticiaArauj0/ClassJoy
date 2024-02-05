import styled from 'styled-components'

export const ContainerChooseProfile = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    padding: 1rem;

    h1 {
      color: ${(props) => props.theme['green-700']};
      font-family: 'Signika';
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    aside {
      display: none;
    }
  }
`

export const ContainerButton = styled.div`
  width: 20rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  a {
    width: 100%;
    height: 3rem;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }
`

export const BaseProfileButtton = styled.button`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};

  font-family: 'Open Sans';
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;

  border: 0;
  border-radius: 10px;

  cursor: pointer;

  div {
    width: 14rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`

export const TeacherButton = styled(BaseProfileButtton)`
  background-color: ${(props) => props.theme['blue-400']};
`

export const ParentsButton = styled(BaseProfileButtton)`
  background-color: ${(props) => props.theme['green-400']};
`
