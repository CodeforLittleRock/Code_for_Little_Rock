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
export const AltLogo = styled.div`
display: flex;
flex-direction: column;
width: 500px;
padding: 10px;
background-color: none;
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
      font-size: 2em;
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
  font-size:2em;
  padding: 1.42em;
}
`
export const PrimBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
a {
  border-radius: 1em;
  background-color: #E84D60;
  color: white;
  text-decoration: none;
  font-size:2.2em;
  font-weight: bolder;
  padding: .3em;
  margin: auto;
  text-align: center;
  width: 400px;
}
`

export const HeroCard = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
padding: 60px;
background-color: white;
max-height: 600px;
max-width: 1200px;
margin: auto;
border-radius: 1em;
  h2 {
    font-size: 5em;
    font-weight: 900;
    line-height: 1.4em;
  }
  p {
    line-height: 1.3em;
    font-size: 2em;
    margin: 10px 0 30px 0;
  }
`
export const GenCard = styled.div`
height: 550px;
width: 270px;
padding: 5px;
margin: 15px;
display: flex;
flex-direction: column;
align-items: center;
svg {
  background-color: #46C5DD;
  border-radius: 50%;
  padding: 9px;
  height: 28%;
  width: 60%;
}
span {
  margin-top: 45px;
  font-size: 2em;
  line-height: 1.2em;
}
`
export const GenNewsCard = styled.div`
background-color: white;
border: 2px solid black;
border-radius: .5em .5em 0  0 ;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 600px;
margin: 15px;
svg {
  height: 10%;
  width: 10%;
  transform: rotate(135deg);
  background-color: silver;
  border-radius: 50%;
  padding: 8px;
  margin: 10px;
  float: right;
}
h2 {
  font-size: 1.5em;
  font-weight: 900;
  margin: 37px 10px 37px 17px;
}
h3 {
  color: silver;
  padding: 5px;
}
`

export const TitleFlex = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;
}
a {
  margin-left: 55px;
  width: 70%;
  font-weight: 900;
  font-size: 23px;
}
`