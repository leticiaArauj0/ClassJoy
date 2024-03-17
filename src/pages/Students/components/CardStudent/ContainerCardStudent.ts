import styled from 'styled-components'

export const ContainerCardStudent = styled.div`
    height: 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    padding: 0.5rem 1rem;

    background-color: ${(props) => props.theme['orange-400']};
    border-radius: 15px;

    img {
        height: 100%;
        border-radius: 100px;
    }

    .container-student-info {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .student-info {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.white};
        font-size: 1.2rem;
    }

    svg {
        align-self: flex-start;
        margin-top: 0.5rem;
    }
`
