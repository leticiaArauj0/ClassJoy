import styled from 'styled-components'

export const Container = styled.button<{ background: string }>`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.background};

  font-family: 'Open Sans';
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;

  border: 0;
  border-radius: 10px;

  cursor: pointer;

  div {
    width: 14rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`
