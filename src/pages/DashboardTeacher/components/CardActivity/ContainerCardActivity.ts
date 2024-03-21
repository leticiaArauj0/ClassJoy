import styled from 'styled-components'

export const ContainerCardActivity = styled.div<{ background: string }>`
    width: 100%;
    height: 8rem;

    display: flex;
    gap: 1rem;

    color: white;
    background-color: ${(props) => props.background};

    border-radius: 20px;
    margin-top: 0.5rem;

    cursor: pointer;

    img {
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    strong {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 1024px) {
        span {
            display: none;
        }
  }
`
