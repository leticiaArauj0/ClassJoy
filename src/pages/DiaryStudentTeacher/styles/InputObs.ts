import styled from 'styled-components'

export const InputObs = styled.textarea`
    width: 100%;
    height: 5rem;

    font-size: 1rem;
    font-family: "Open sans";
    background-color: #77BF0B60;

    border: none;
    border-radius: 5px;
        
    outline-color: ${(props) => props.theme['green-500']};
    outline-width: 1px;

    padding: 0.5rem;
    resize: none;
`
