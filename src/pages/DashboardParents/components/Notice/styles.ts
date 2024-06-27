import styled from "styled-components"
import { Card } from "../../../../shared/styles/Card"

export const ContainerNotice = styled(Card)<{backgroundColor: string}>`
    position: relative;

    .top {
        position: absolute;
        left: 0;
        top: 0;

        height: 4rem;
        width: 100%;

        background-color: ${(props) => props.backgroundColor};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 2rem;

        strong {
            color: white;
            font-size: 1.8rem;
            font-weight: 600;
            font-family: 'Open sans';
        }
    }

    .container-date-info {
        margin-top: 3.25rem;
        height: 80%;
        border: 1px solid #00000060;
        border-radius: 5px;
        padding: 1rem;
        
        strong {
            font-size: 1.25rem;
        }

        p {
            margin-top: 0.5rem;
            font-size: 1.15rem;
        }
    }
`
