import styled from "styled-components";

export const ContainerChild = styled.div`
    height: 15rem;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
`
