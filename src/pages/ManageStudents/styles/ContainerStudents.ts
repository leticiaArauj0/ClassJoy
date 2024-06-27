import styled from 'styled-components'

export const ContainerStudents = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .container-card-students {
        height: 100%;
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container-card-info-students {
        height: 100%;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
