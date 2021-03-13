import React from 'react'
import { FooterWrapper } from '../../styles/wrapper/Wrapper'
import { ReactComponent as FooterLogoImg } from '../../assets/img/svg/footer-logo-mark.svg';
import { AltLogo } from '../../styles/utils/Styles';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterWrapper>
      <AltLogo>
        <Link to='/' >
          <FooterLogoImg />
        </Link>
        <p>Code for Little Rock is part of the Code for America Brigade Network. We are a welcoming and inclusive volunteer group of developers, designers, data geeks, and citizen activists who use creative technology to solve civic and social problems.</p>
      </AltLogo>
      <div className="links">
        <ul>
          <li><Link to={{ pathname: "https://join.slack.com/t/code-for-little-rock/shared_invite/zt-ner1xm93-puyrqkMgFGMsFI9JcpzjSg" }} target="_blank">Join Slack</Link></li>
          <li><Link to={{ pathname: "https://github.com/CodeforLittleRock/Code_for_Little_Rock" }} target="_blank">Github</Link></li>
          <li><Link to={{ pathname: "https://brigade.codeforamerica.org/about/code-of-conduct" }} target="_blank">Code of Conduct</Link></li>
          <li><Link to={{ pathname: "mailto:melissa.bridges@codeforlittlerock.org?subject=Contact Request" }} target="_blank">Contact Us</Link></li>
        </ul>
      </div>
    </FooterWrapper>
  )
}
