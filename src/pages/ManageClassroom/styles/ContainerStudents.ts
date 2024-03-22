import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerStudents = styled(Card)`
    h2 {
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
    }

    .content {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        overflow-x: auto;
        overflow-y: hidden;
    }
`
