import styled from 'styled-components'

export const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: 0.3rem;

  .line {
    width: 150px;
    border-bottom: 1px solid ${(props) => props.theme.black};
  }
`
