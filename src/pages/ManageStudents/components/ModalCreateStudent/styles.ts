import styled from 'styled-components'

export const ContainerModal = styled.div`
    background-color: ${(props) => props.theme.white};

    width: 22rem;
    height: 20rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;

    border-radius: 10px;
    box-shadow: 0 0 5px #00000020;
    padding: 1rem 1rem 2rem 1rem;

    z-index: 1;

    .close {
        width: 1.5rem;
        height: 1.5rem;

        background-color: transparent;
        color: ${(props) => props.theme['red-600']};

        align-self: flex-end;
        border: none;
        cursor: pointer;
    }

    h1 {
        font-size: 1.7rem;
        font-family: 'Signika';
    }

    form, .body {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        button {
            align-self: center;
        }
    }

    .button {
        display: flex;
        gap: 0.5rem;
        align-self: center;
    }

    label {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .labelEdit {
        font-size: 1rem;
    }

    .spanEdit {
        padding: 0.08rem 0;
    }

    span {
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem 0;
    }

    input {
        height: 2rem;

        background-color: #F4F4F4;
        font-size: 1rem;

        border-radius: 8px;
        border: 1px solid ${(props) => props.theme['blue-500']};
        outline-color: ${(props) => props.theme['blue-500']};

        padding: 0.5rem;
    }
`
