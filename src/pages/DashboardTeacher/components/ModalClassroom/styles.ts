import styled from 'styled-components'

export const ContainerModal = styled.div`
    width: 10rem;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    position: absolute;
    right: 0;

    margin-right: 1rem;

    span {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        padding: 0.5rem 0;
    }

    span:hover {
        opacity: 0.6;
        transition: 0.3s all ease-out;
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: ${(props) => props.theme.black};
        opacity: 0.4;
    }

    .delete {
        color: ${(props) => props.theme['red-400']};
    }
`
