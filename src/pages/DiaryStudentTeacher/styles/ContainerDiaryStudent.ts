import styled from 'styled-components'

export const ContainerDiaryStudent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .container-card-students {
        height: 100%;
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .container-card-info-students {
        height: 100%;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;

        .send {
            background-color: ${(props) => props.theme['green-500']};
            height: 3.2rem;
            width: 100%;
            border: 0;
            border-radius: 10px;
            color: ${(props) => props.theme.white};
            font-size: 1.6rem;
            font-weight: 600;
            opacity: 0.8;
            cursor: pointer;
        }

        button:hover {
            opacity: 0.6;
            transition: 0.3s ease all;
        }
    }
`
