import styled from 'styled-components'

export const ContainerForm = styled.div`
  color: ${(props) => props.theme.black};

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 22rem;

   position: relative;

  .text-forgot {
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  .container-password {
    display: flex;
    gap: 0.5rem;
  }
`
