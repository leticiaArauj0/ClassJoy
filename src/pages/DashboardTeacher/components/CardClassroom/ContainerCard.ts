import styled from 'styled-components'

export const ContainerCard = styled.div`
    width: 100%;
    height: 12rem;

    display: flex;
    justify-content: space-between;

    background-image: url('/src/pages/DashboardTeacher/assets/classroom.png');
    background-repeat: no-repeat;
    background-size: cover;

    padding: 1rem;
    margin-top: 1rem;
    border-radius: 15px;

    cursor: pointer;
    overflow: hidden;

    h1 {
        align-self: flex-end;
        color: ${(props) => props.theme['purple-700']};
    }
`
