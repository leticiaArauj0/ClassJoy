import styled from "styled-components"

export const ContainerCard = styled.div`
    height: 4rem;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;
    
    background-color: #77BF0B70;
    color: #131313;
    border-radius: 10px;

    padding: 0.5rem 2rem;

    cursor: pointer;
    transition: 0.3s ease all;

    &:hover {
        opacity: 0.7;
    }

    img {
        height: 3rem;
        width: 3rem;
        border-radius: 100px;
    }
    
    span {
        font-size: 1.25rem;
        font-weight: 500;
    }
`
