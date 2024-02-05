import styled from 'styled-components'

export const BaseButton = styled.button`
  width: 11rem;
  height: 2.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};

  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;

  border: 0;
  border-radius: 12px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.3s ease;
  }
`

export const ContainerLoginButton = styled(BaseButton)`
  background-color: rgba(150, 107, 242, 1);
`

export const ContainerRegisterButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-400']};
`

export const ContainerLoginGoogleButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};

  font-weight: 400;

  border: 1px solid ${(props) => props.theme.black};
  border-radius: 14rem;

  width: 22rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`
