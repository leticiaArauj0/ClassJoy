import styled from 'styled-components'

export const ContainerGoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};

  font-weight: 400;
  font-size: 1rem;

  border: 1px solid ${(props) => props.theme.black};
  border-radius: 14rem;

  height: 2.2rem;
  width: 23rem;

  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    opacity: 0.7;
  }
`
