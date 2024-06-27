import styled from 'styled-components'

export const ContainerClassroom = styled.div`
    height: 100%;
    width: 98%;

    display: flex;
    gap: 1rem;

    .container-chart-activity, .container-chart-student {
        height: 100%;
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .planning {
        height: 100%;
        width: 100%;

        background-color: ${(props) => props.theme.white};
        border-radius: 10px;
        
        padding: 1.5rem;
        box-shadow: 0px 2px 3px #00000020;

        position: relative;

        .background {
            width: 100%;
            height: 5rem;
            position: absolute;
            left: 0;
            top: 0;
            background-color: ${(props) => props.theme['green-500']};
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h1 {
                color: ${(props) => props.theme.white};
                font-weight: 700;
            }
        }

        h2 {
            margin-top: 5rem;
            margin-bottom: 1rem;
         }
    }

    .todo-list {
        height: 70%;
        border: 1px solid #00000090;
        padding: 2rem;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    span {
        font-size: 1.25rem;
    }
`
