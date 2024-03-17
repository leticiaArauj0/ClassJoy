import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerCardStudents = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .line {
        width: 100%;
        height: 0.8px;
        background-color: ${(props) => props.theme.black};
    }
`
