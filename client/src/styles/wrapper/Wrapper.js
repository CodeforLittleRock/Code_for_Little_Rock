import styled from 'styled-components'

export const GlobalWrapper = styled.div`
background-color: silver;
`
export const AppWrapper = styled.div`
background-color: silver;
`

export const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
height: 65px;
ul {
  list-style: none;
  li {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
`