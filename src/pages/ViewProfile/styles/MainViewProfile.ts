import styled from 'styled-components'

export const MainViewProfile = styled.div`
  height: 97%;
  width: 98.5%;
  align-self: center;

  .container {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 20px;
`
