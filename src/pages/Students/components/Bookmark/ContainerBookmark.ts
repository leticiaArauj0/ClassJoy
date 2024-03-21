import styled from 'styled-components'

export const ContainerBookmark = styled.div`
    width: 98.3%;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin-bottom: 1rem;

    strong {
        font-size: 2.5rem;
        font-weight: 500;
    }
    
    .line {
        width: 100%;
        height: 0.6px;
        background-color: ${(props) => props.theme.black};
    }
`
