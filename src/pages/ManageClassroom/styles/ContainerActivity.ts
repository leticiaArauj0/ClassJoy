import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerActivity = styled(Card)`
    overflow-y: auto;

    h2 {
        font-size: 1.7rem;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        svg {
            cursor: pointer;
        }

        svg:hover {
            opacity: 0.7;
            transition: 0.2s ease all;
        }
    }
`
