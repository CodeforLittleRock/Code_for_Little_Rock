import React from 'react'
import { Link } from 'react-router-dom'
import { GenNewsCard, TitleFlex } from '../styles/utils/Styles'
import { NewsCardWrapper, NewsWrapper } from '../styles/wrapper/Wrapper'
import { ReactComponent as ArrowImg } from '../assets/img/svg/arrowback.svg';

export default function LatestNews() {
  return (
    <NewsWrapper>
      <NewsCardWrapper>
        <TitleFlex>
          <h1>New and notable.</h1>
          <Link to='/about' >See All News</Link>
        </TitleFlex>
        <GenNewsCard>
          <h3>3/11/2020</h3>
          <h2>Title of blog post lorem ipsom dolor sit amet</h2>
          <Link to='#'>
            <ArrowImg />
          </Link>
        </GenNewsCard>
        <GenNewsCard>
          <h3>3/11/2020</h3>
          <h2>Title of blog post lorem ipsom dolor sit amet ipsom dolor sit amet</h2>
          <Link to='#'>
            <ArrowImg />
          </Link>
        </GenNewsCard>
      </NewsCardWrapper>
    </NewsWrapper>
  )
}
