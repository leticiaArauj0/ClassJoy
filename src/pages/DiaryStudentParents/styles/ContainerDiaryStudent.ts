import styled from "styled-components"

export const ContainerDiaryStudent = styled.div`
    background-color: white;
    border-radius: 10px;

    height: 90%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    position: relative;

    .container-diary {
        width: 40rem;
        padding: 1rem 3rem;
        border: 4px solid ${(props) => props.theme["purple-400"]};
        border-radius: 10px;
        height: 100%;
        overflow-y: scroll;
        margin-left: 10rem;
    }

    .container-student {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
    }

    input[type="date"] {
        width: 180px;
        background-color: #00000020;
        border: 1px solid ${(props) => props.theme["purple-400"]};
        outline-color: ${(props) => props.theme["purple-400"]};
        border-radius: 8px;
        padding: 0.5rem;
        position: absolute;
        left: 40px;
        top: 50px;
        font-size: 1.1rem;
        font-family: 'Open sans';
    }

    .line {
        width: 100%;
        height: 0.9px;
        background-color: #00000080;
        margin-top: 1.5rem;
    }
`
