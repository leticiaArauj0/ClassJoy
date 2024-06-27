import styled from 'styled-components'

export const ContainerTimeDate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    .time {
        display: flex;
        gap: 2rem;
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: black;
    }

    input {
        background-color: ${(props) => props.theme['gray-100']};
        border: none;
        border-radius: 5px;
        padding: 0.3rem 1rem;
        outline-width: 1px;
        outline-color: ${(props) => props.theme['purple-400']};
    }
`
