import styled from 'styled-components'

export const ContainerCardStudent = styled.div`
    height: 10rem;
    min-width: 9rem;

    background-color: ${(props) => props.theme['purple-600']};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    margin-bottom: 0.5rem;
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    .profile {
        height: 4rem;
        width: 4rem;
        border-radius: 100px;
    }

    .dots {
        position: absolute;
        right: 0;
        top: 4px;
        cursor: pointer;
    }
`
