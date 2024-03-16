import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;

    main {
      height: 90vh;
      width: 100vw;
    }

    aside {
      display: none;
    }
  }
`
