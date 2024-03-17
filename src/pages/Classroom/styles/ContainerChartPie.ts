import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerChartPie = styled(Card)`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    box-shadow: 0px 2px 3px #00000020;

    cursor: pointer;

    h3 {
        font-size: 1.25rem;
    }
`
