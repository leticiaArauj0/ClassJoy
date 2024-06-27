import styled from 'styled-components'

export const ContainerModal = styled.div`
    width: 10rem;

    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    box-shadow: 0px 2px 3px #00000020;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    right: 0;

    margin: 0.5rem 0.5rem;

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
