import styled from 'styled-components'

export const Navbar = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 2rem 0;

  img {
    height: 4.25rem;
  }

  li {
    list-style: none;
    color: ${(props) => props.theme.white};
    margin: 2.5rem;
    cursor: pointer;
  }
`
