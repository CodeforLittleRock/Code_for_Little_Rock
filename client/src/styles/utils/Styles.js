import styled from 'styled-components'

export const Logo = styled.div`
display: flex;
padding: 10px;
justify-content: center;
align-items: flex-end;
svg {
  height: 45px;
}
`

export const NavGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 900;
ul {
  display: flex;
  li {
    padding: 0 15px;
    a {
      font-size: 1em;
    }
    &:hover {
      transition: border-bottom 300ms; 
      border-bottom: 4px solid #E84D60;
    }
  }
}
`

export const Donate = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
a {
  background-color: #E84D60;
  color: white;
  text-decoration: none;
  font-size:1em;
  padding: 1.5em;
}
`