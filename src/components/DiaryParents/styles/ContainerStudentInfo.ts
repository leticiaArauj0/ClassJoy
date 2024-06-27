import styled from "styled-components";

export const ContainerStudentInfo = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    h1 {
        text-align: center;
    }

    img {
        height: 5.5rem;
        width: 5.5rem;
        border-radius: 5px;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 1.1rem;
    }

    .hour {
        display: flex;
        gap: 1rem;
    }
`
