import styled from "styled-components";

export const ContainerDescription = styled.div<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.75rem;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
`