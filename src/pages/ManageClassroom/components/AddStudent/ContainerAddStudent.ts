import styled from 'styled-components'

export const ContainerAddStudent = styled.div`
    height: 10rem;
    min-width: 9rem;

    background-color: ${(props) => props.theme['purple-600']};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    
    padding: 0.5rem;
    border-radius: 10px;

    cursor: pointer;

    span {
        text-align: center;
        font-size: 1.125rem;
        font-weight: 600;
    }
`
