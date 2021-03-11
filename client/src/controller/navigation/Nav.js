import React from 'react'
import { Link } from 'react-router-dom'
import { Donate, Logo, NavGroup } from '../../styles/utils/Styles'
import { NavWrapper } from '../../styles/wrapper/Wrapper'
import { ReactComponent as FullLogoImg } from '../../assets/img/svg/headerFullLogo.svg';

export default function Nav() {

  return (
    <NavWrapper>
      <Logo>
        <Link to='/' >
          <FullLogoImg />
        </Link>
      </Logo>
      <NavGroup>
        <div className="navLinks">
          <ul>
            <li><Link to='/get-involved' >Get Involved</Link></li>
            <li><Link to='/about' >About</Link></li>
          </ul>
        </div>
        <Donate><Link to={{ pathname: "https://www.codeforamerica.org/donate" }} target="_blank">Donate</Link></Donate>
      </NavGroup>
    </NavWrapper>
  );
}
