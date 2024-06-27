import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerDiaryParents = styled(Card)`
    padding: 2rem;
    overflow-y: scroll;

    .line {
        width: 100%;
        height: 0.9px;
        background-color: #00000080;
        margin-top: 1.5rem;
    }
`
