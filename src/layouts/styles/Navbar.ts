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
    width: 100%;
    color: ${(props) => props.theme.white}; 

    margin: 2.5rem;
    padding: 0.5rem 3rem;

    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;

    cursor: pointer;
    transition: 0.1s ease all;
  }

  li:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['purple-700']};
  }

  .home, .classroom, .students {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['purple-700']};
  }
`
