import styled from 'styled-components'
import HeroPng from '../../assets/img/png/hero.png'
import NewsImg from '../../assets/img/png/Blue_City.png'
import BackGroundImg from '../../assets/img/png/defaultBackground.png'

export const GlobalWrapper = styled.div`
`
export const AppWrapper = styled.div`
background-image: url(${BackGroundImg});
width: 100%;
background-position: center;
background-size: 100vw;
position: relative;
background-repeat: repeat;
line-height: 1.8em;
`

export const NavWrapper = styled.div`
display: flex;
background-color: white;
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
export const FooterWrapper = styled.div`
display: flex;
height: 400px;
justify-content: space-around;
color: white;
background-color: #1F153D;
align-items: center;
position: relative;
z-index: 1;
ul {
  list-style: none;
  li {
    padding: 5px;
    a {
      color: white;
    }
    &:hover {
      color: red;
    }
  }
}
`

export const HeroWrapper = styled.div`
background-image: url(${HeroPng});
height: 100%;
height: 110vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
display: flex;
justify-content: left;
align-items: center;
padding: 50px;
`

export const GenCardWrapper = styled.div`
ul {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 15px;
  padding: 15px;
  text-align: center;
}
`

export const SkillsWrapper = styled.div`
margin-top: 4em;
h2, p {
  text-align: center;
  margin: auto;
  max-width:1000px;
  font-size: 2em;
  line-height: 2em;
}

h2 {
  font-size: 3.5em;
}

p {
  max-width: 800px;
  margin-bottom: 115px;
}
`

export const NewsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 100%;
div {
  display: flex;
  a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid white;
    &:hover {
      border-bottom: 2px solid #E84D60;
    }
  }
}
`
export const NewsCardWrapper = styled.div`
display: inline-block;
justify-content: center;
align-items: center;
width: 75em;
height: 35em;
margin-bottom: 3em;
background-image: url(${NewsImg});
background-position: center;
background-repeat: no-repeat;
background-size: 90%;
border-radius: 1em;
h1 {
  font-size: 5em;
  line-height: 1em;
  margin-left: 55px;
}

`
export const IdeaWrapper = styled.div`
height: 250px;
width: 80vw;
background-color: #E84D60;
border-radius: 1em;
margin: auto;
position: relative;
bottom: -15px;
z-index: 15;
margin-bottom: -50px;
display: flex;
justify-content: center;
align-items: center;
color: white;
.words {
  display: flex;
  font-size: 2em;
  margin: 0 30px;
  font-weight: 900;
  padding: 3px;
}
img {
  width: 10em;
  height: 10em;
}
h2 {
  padding: 3px;
}
h3 {
  font-size: 1.5em;
  padding-bottom: .3em;
  border-bottom: 3px solid white;

}
svg {
  height: 40px;
  width: 40px;
  transform: rotate(135deg);
  &:hover {
    transform: rotate(0.5turn);
    transition-duration: 1s;
  }
}
`