import styled from 'styled-components'

export const ContainerClassroom = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    flex-grow: 1;
    grid-template-columns: 1fr 1fr;

    .container-donut-chart{
        height: 100%;
        width: 95%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container-bar-chart {
        height: 100%;
        width: 95%;
        padding-top: 3.68rem;
    }
`
