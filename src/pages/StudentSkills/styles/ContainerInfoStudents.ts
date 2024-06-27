import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerInfoStudents = styled(Card)`
    position: relative;
    padding-top: 5rem;
    padding-right: 2rem;
    padding-left: 2rem;

    overflow-y: scroll;
    overflow-x: hidden;

    font-family: 'Signika';

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

    .container-delete-update {
        display: flex;
        justify-content: center;
        gap: 2.5rem;

        svg {
            cursor: pointer;
        }
    }

    .line {
        height: 0.9px;
        width: 100%;
        background-color: #00000060;
        margin: 1rem 0.5rem;
        align-self: center;
    }

    .container-number {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .number {
        width: 4.5rem;
        padding: 0.25rem 1rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        background-color: #77BF0B90;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    }

    .subtitle {
        display: flex;
        gap: 0.5rem;
    }

    .container-button {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .container-arrow {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin: 2rem 0;

        button {
            background-color: ${(props) => props.theme['green-500']};
            padding: 0.25rem 0.5rem;
            color: white;
            border: none;
            border-radius: 5px;
            display: flex;
            align-items: center;
        }
    }
`
