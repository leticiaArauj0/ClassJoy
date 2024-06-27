import styled from "styled-components";

export const AddButton = styled.button` 
    height: 90%;
    width: 10.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 10px;
    padding: 0.8rem;

    cursor: pointer;
    transform: 0.3s ease all;

    &:hover {
        opacity: 0.8;
    }

    span {
        font-family: 'Open sans';
        font-size: 1.4rem;
        font-weight: 600;
    }
`