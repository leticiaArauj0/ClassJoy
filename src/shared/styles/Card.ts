import styled from 'styled-components'

export const Card = styled.div<{ height: string }>`
    height: ${(props) => props.height};
    width: 100%;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    
    padding: 1.5rem;

    overflow-y: scroll;
`
