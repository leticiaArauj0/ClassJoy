import styled from 'styled-components'

export const Card = styled.div<{ height: string, overflow?: string }>`
    height: ${(props) => props.height};
    width: 100%;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    
    padding: 1.5rem;
    box-shadow: 0px 2px 3px #00000020;

    overflow-y: ${(props) => props.overflow};
`
