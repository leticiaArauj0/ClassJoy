import styled from "styled-components";

export const ContainerCardChild = styled.div`
    height: 90%;
    width: 13rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background-color: ${(props) => props.theme["purple-400"]};
    color: ${(props) => props.theme.white};

    border-radius: 10px;
    padding: 1.5rem;

    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: 0.3s ease all;
    }

    img {
        height: 4rem;
        width: 4rem;
        border-radius: 100px;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 1.05rem;
    }
`
