import styled from 'styled-components'
import { Card } from '../../../../shared/styles/Card'

export const ContainerCard = styled(Card)`
    width: 95%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 1rem;
    padding: 0 1.5rem;

    position: relative;
    cursor: pointer;

    .background {
        width: 100%;
        height: 8rem;

        background-image: url('/src/pages/Classroom/assets/classroom.svg');
        background-position: center;
        background-size: cover;

        position: absolute;
        left: 0;
        top: 0;

        border-radius: 10px;
    }

    h2 {
        margin-top: 9rem;
        font-weight: 600;
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
        align-items: flex-end;

        gap: 0.5rem;
    }

    svg:hover {
        opacity: 0.7;
        transition: 0.3s ease all;
    }
`
