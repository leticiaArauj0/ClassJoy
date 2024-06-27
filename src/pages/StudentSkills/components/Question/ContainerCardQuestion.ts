import styled from "styled-components";

export const ContainerCardQuestion = styled.div`
    margin-top: 1rem;
    font-family: 'Open sans';

    h3 {
        margin-bottom: 0.5rem;
    }

    textarea {
        width: 100%;
        height: 3rem;
        border: 2px solid #00B8F0;
        padding: 0.5rem;
        border-radius: 10px;
        font-size: 1rem;
        font-family: 'Open sans';
        outline-color: #00B8F0;
        margin: 0.75rem 0;
    }

    .question {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 1rem 1.5rem;
    }

    input[type="radio"] {
        height: 1rem;
        width: 1rem;
    }
`
