import styled from 'styled-components'

export const ContainerCardStudent = styled.span`
    height: 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    padding: 0.5rem 1rem;
    text-align: left;
    
    background-color: ${(props) => props.theme['orange-400']};
    border-radius: 15px;
    border: none;

    position: relative;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 0.3s ease all;
    }

    img {
        height: 5rem;
        border-radius: 100px;
    }

    .container-student-info {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .student-info {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme.white};
        font-size: 1.2rem;
    }

    svg {
        align-self: flex-start;
        margin-top: 0.5rem;
    }
`
