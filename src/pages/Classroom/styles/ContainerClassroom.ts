import styled from 'styled-components'

export const ContainerClassroom = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .container-chart-activity {
        height: 100%;
        width: 95%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container-bar-chart {
        height: 100%;
        width: 95%;
    }
`
