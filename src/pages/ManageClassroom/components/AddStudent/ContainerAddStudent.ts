import styled from 'styled-components'

export const ContainerAddStudent = styled.button`
    height: 10rem;
    min-width: 9rem;

    background-color: ${(props) => props.theme['orange-400']};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    
    padding: 0.5rem;
    border-radius: 10px;
    border: none;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: 0.3s ease all;
    }

    span {
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;
    }
`
