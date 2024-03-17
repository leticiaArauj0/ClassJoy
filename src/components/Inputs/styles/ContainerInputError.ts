import styled from 'styled-components'

export const ContainerInputError = styled.div<{ margin: string }>`
  width: 100%; 
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: ${(props) => props.margin};
  line-height: 0.9;
  position: relative;
`
