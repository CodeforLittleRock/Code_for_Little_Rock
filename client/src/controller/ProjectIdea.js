import React from 'react'
import { Link } from 'react-router-dom'
import { IdeaWrapper } from '../styles/wrapper/Wrapper'
import { ReactComponent as ArrowImg } from '../assets/img/svg/arrowback.svg';
import Hands from '../assets/img/png/hands.png'

export default function ProjectIdea() {
  return (
    <IdeaWrapper>
      <img src={Hands} alt="" />
      <div className="words">
        <h2>Have a project Idea?</h2>
        <h3>Tell us.</h3>
      </div>
      <Link to='#'>
        <ArrowImg />
      </Link>
    </IdeaWrapper>
  )
}
