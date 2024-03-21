import styled from 'styled-components'
import { Card } from '../../../../shared/styles/Card'

export const ContainerCardStudent = styled(Card)`
    width: 95%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 1rem;
    padding: 0 1.5rem;

    position: relative;
    cursor: pointer;

    img {

    }

    .photo {
        margin-top: 3rem;
    }

    .background {
        width: 100%;
        height: 6rem;

        background-color: ${(props) => props.theme['green-500']};
        opacity: 0.7;

        position: absolute;
        left: 0;
        top: 0;

        border-radius: 10px;
    }

    .line {
        height: 0.6px;
        width: 100%;

        background-color: ${(props) => props.theme.black};

        position: absolute;
        left: 0;
    }

    .icons {
        height: 3rem;
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        gap: 0.5rem;
    }

    svg:hover {
        opacity: 0.7;
        transition: 0.3s ease all;
    }
`
