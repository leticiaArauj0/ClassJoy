import styled from 'styled-components'

export const AsideContainer = styled.aside`
  height: 100vh;
  width: 100%;

  background-color: ${(props) => props.theme['purple-600']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  strong {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-size: 1.7rem;
    padding: 1rem 3rem;
  }
`
