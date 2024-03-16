import styled from 'styled-components'

export const ContainerClassroom = styled.div`
    width: 95%;

    .classroom-info {
        display: flex;
        justify-content: space-between;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0.3rem 0.9rem;
        font-weight: 600;
        border-radius: 10px;
        background-color: ${(props) => props.theme['gray-300']};
        width: 48%;
        cursor: pointer;
        transition: 0.125s ease all;
    }

    span:hover {
        opacity: 0.7;
    }
`
