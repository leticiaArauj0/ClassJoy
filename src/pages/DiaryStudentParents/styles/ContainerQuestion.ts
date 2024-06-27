import styled from 'styled-components'

export const ContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.2rem;

    h2 {
        text-align: left;
        margin-top: 1rem;
        font-size: 1.4rem;
    }

    .reminder {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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

    .time, .bathroomAmount {
        display: flex;
        gap: 0.5rem;

        div {
            display: flex;
            gap: 0.5rem;
        }
    }

    .notes {
        width: 100%;
        height: 8rem;
        background-color: #00000025;
        border-radius: 10px;
        padding: 0.5rem 1rem;
    }
`
