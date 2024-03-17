import styled from 'styled-components'

export const ContainerAddButton = styled.button`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['green-500']};
    opacity: 0.8;

    border-radius: 10px;
    border: none;

    transition: 0.2s ease all;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`
