import styled from 'styled-components'
import { Card } from '../../../shared/styles/Card'

export const ContainerCardActivity = styled(Card)`
    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .planning {
        width: 100%;
        height: 8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        background-image: url("/src/pages/DashboardTeacher/assets/planning.png");
        background-size: cover;

        border-radius: 20px;
        margin: 0.5rem 0;

        cursor: pointer;

        h1 {
            font-size: 2rem;
            color: #131313;
            font-family: 'Signika';
            font-weight: 600;
            padding-left: 10rem;
        }      
    }
`

export const ContainerActivity = styled.div`
    height: 100%;
    width: 95%;
`
