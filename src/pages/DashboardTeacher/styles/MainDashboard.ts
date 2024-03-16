import styled from 'styled-components'

export const MainDashboard = styled.main`
  height: 97%;
  width: 98.5%;

  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 20px;

  .container-classroom-activity {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
