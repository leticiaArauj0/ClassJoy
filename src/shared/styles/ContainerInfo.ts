import styled from 'styled-components'

export const ContainerInfo = styled.span`
    display: flex;
    justify-content: space-between;

    span {
        width: 48%;

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        padding: 0.3rem 0.9rem;
        border-radius: 10px;

        font-weight: 600;

        background-color: ${(props) => props.theme['gray-300']};
        
        cursor: pointer;
        transition: 0.125s ease all;
    }

    span:hover {
        opacity: 0.7;
    }
`
