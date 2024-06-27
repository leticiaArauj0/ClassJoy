import styled from 'styled-components'

export const ContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.2rem;

    .title {
        text-align: left;
        margin-top: 1rem;
    }

    input {
        height: 1rem;
        width: 1rem;
    }

    .feeding, .ateAlone, .bathroom, .sleep {
        display: flex;
        gap: 2rem;
    }

    .qtd {
        height: 2rem;
        width: 3rem;
        font-size: 1rem;
        padding: 0.5rem;
        background-color: ${(props) => props.theme['gray-100']};
        border: none;
        border-radius: 5px;
        outline-width: 1px;
        outline-color: ${(props) => props.theme['purple-400']};
    }

    .time {
        display: flex;
        gap: 0.5rem;

        input {
            height: 1.5rem;
            width: 5.25rem;
            background-color: ${(props) => props.theme['gray-100']};
            border: none;
            border-radius: 5px;
            padding: 0.3rem 0.3rem;
            outline-width: 1px;
            outline-color: ${(props) => props.theme['purple-400']};
        }
    }
`
