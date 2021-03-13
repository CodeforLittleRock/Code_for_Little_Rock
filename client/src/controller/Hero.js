import React from 'react'
import { HeroWrapper } from '../styles/wrapper/Wrapper'
import { PrimBtn, HeroCard } from '../styles/utils/Styles'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
    <HeroWrapper>
      <HeroCard>
        <h2>Building civic apps for Little Rock.</h2>
        <p>We are part of a national alliance of volunteer coders and problem solvers putting technology to work to serve our local communities. If you believe in the power of open data and open government, join us to make a difference in Little Rock.</p>
        <PrimBtn><Link to={{ pathname: "https://www.codeforamerica.org/donate" }} target="_blank">Get Involved</Link></PrimBtn>
      </HeroCard>
    </HeroWrapper>
  )
}
