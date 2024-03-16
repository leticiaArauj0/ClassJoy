import styled from 'styled-components'

export const Main = styled.main`
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
`
