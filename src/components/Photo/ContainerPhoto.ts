import styled from 'styled-components'

export const ContainerPhoto = styled.div<{ border?: string, height: string, camera?: string }>`
    display: flex;
    justify-content: center;
    height: ${(props) => props.height};

    img {
      height: ${(props) => props.height};

      border: ${(props) => props.border};
      border-radius: 70px;

      position: absolute;
      cursor: pointer;
    }

    .camera {
      height: 1.5rem;
      width: 1.5rem;

      display: ${(props) => props.camera};
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
`
