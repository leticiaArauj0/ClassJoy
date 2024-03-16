import styled from 'styled-components'

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
