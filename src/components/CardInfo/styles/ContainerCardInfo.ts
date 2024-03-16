import styled from 'styled-components'

export const ContainerCardInfo = styled.div<{ color: string }>`
    width: 90%;
    height: 5rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    box-shadow: 1px 1px 1px #00000004;

    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 10px #00000008;
    }
    
    strong {
        font-size: 1.6rem;
    }

    .border {
        width: 1.5rem;
        height: 100%;
        background-color: ${(props) => props.color};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        margin-right: 0.8rem;
    }

    .info {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`
