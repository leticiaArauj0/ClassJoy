import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif;
    }
`
