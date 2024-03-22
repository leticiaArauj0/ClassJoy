import styled from 'styled-components'

export const ContainerClassroom = styled.div`
    height: 100%;
    width: 98%;

    display: flex;
    gap: 1rem;

    .container-chart-activity, .container-chart-student {
        height: 100%;
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`
