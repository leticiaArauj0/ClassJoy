import styled from "styled-components"

export const ContainerClassroom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.black};
    }
`
