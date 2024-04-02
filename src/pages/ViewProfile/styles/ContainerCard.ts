import styled from 'styled-components'

export const ContainerCard = styled.div<{ width: string }>`
  height: 65%;
  width: ${(props) => props.width};

  background-color: ${(props) => props.theme.white};
  border: 1.25px solid ${(props) => props.theme['purple-400']};
  border-radius: 10px;

  padding: 1.5rem;
  /* margin-top: 8rem; */
`

export const ContainerCardPerfil = styled(ContainerCard)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  li {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.25rem 0;
    cursor: pointer;
  }

  .logout svg {
    rotate: 180deg;
  }

  .delete {
    color: ${(props) => props.theme['red-600']};
  }
`

export const ContainerCardInfo = styled(ContainerCard)`
  form {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  button {
    align-self: flex-end;
  }
`
