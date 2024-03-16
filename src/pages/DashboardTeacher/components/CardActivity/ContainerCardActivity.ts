import styled from 'styled-components'

export const ContainerCardActivity = styled.div`
    width: 90%;

    display: flex;
    gap: 1rem;

    color: white;
    background-color: ${(props) => props.theme['purple-400']};

    border-radius: 20px;
    margin-top: 0.5rem;

    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    strong {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
`
