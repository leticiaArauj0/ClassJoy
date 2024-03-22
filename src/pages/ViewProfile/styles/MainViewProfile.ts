import styled from 'styled-components'

export const MainViewProfile = styled.div`
  height: 97%;
  width: 98.5%;
  align-self: center;

  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 20px;

  position: relative;

  .container {
    height: 90%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    position: relative;
    z-index: 1;
  }

  .background {
    width: 100%;
    height: 40%;

    background-image: url('/src/assets/background-view.svg');
    background-position: center;
    background-size: cover;

    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
`
