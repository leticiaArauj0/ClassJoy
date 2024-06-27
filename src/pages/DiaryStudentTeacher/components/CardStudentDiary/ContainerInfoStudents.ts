import styled from 'styled-components'
import { Card } from '../../../../shared/styles/Card'

export const ContainerInfoStudents = styled(Card)`
    position: relative;
    padding-top: 5rem;

    font-family: 'Signika';

    overflow-y: scroll;

    .background {
        width: 100%;
        height: 10rem;

        background-color: ${(props) => props.theme['purple-400']};
        opacity: 0.7;

        position: absolute;
        left: 0;
        top: 0;

        border-radius: 10px;
    }

    h2 {
        text-align: center;
        font-weight: 500;
        margin-top: 0.5rem;
    }

    .container-age-code {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3rem;
        font-size: 1.2rem;
        margin: 0.7rem 0;

        span {
            font-weight: 200;
        }
    }

    .container-button {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
`
