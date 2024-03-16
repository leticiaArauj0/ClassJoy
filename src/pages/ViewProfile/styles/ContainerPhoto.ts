import styled from 'styled-components'

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  .photo {
    display: flex;
    justify-content: center;
    height: 7rem;

    img {
      height: 7rem;

      border: 2px solid ${(props) => props.theme['blue-500']};
      border-radius: 70px;

      position: absolute;
      cursor: pointer;
    }

    .camera {
      height: 1.5rem;
      width: 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['purple-400']};

      border-radius: 70px;

      position: relative;
      right: -40px;

      cursor: pointer;
    }
  }

  span {
    font-size: 0.9rem;
  }
`
