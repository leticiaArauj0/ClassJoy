import styled from "styled-components";
import { Card } from "../../../shared/styles/Card";

export const ContainerCardStudents = styled(Card)`
    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        h1 {
            font-weight: 600;
        }
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: #00000080;
    }
`
