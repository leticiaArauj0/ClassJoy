import styled from 'styled-components'

export const ContainerLoginParents = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

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
