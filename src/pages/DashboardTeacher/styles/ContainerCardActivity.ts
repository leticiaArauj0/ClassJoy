import styled from 'styled-components'

export const ContainerCardActivity = styled.div`
    width: 100%;
    height: 30rem;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;

    padding: 1.5rem;
    overflow: scroll;

    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h3 {
        font-weight: 600;
        margin-top: 1rem;
    }
`

export const ContainerActivity = styled.div`
    width: 95%;
`
