import styled from 'styled-components'

export const ContainerCardClassroom = styled.div`
    width: 100%;
    height: 30rem;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;

    margin-top: 1rem;
    padding: 1.5rem;

    overflow: scroll;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
    }
`
