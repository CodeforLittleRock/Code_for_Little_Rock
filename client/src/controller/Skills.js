import React from 'react'
import { GenCard } from '../styles/utils/Styles'
import { GenCardWrapper, SkillsWrapper } from '../styles/wrapper/Wrapper'
import { ReactComponent as MegaPhoneImg } from '../assets/img/svg/megaphone.svg';
import { ReactComponent as TeamworkImg } from '../assets/img/svg/teamwork.svg';
import { ReactComponent as CodingImg } from '../assets/img/svg/coding.svg';

export default function Skills() {
  return (
    <SkillsWrapper>
      <h2>Put your skills to work for good.</h2>
      <p>Civic hackers aren't just developers — they're teachers, journalists, lawyers, designers, students and interested citizens. The more community participation, the better.</p>
      <GenCardWrapper>
        <ul>
          <li>
            <GenCard>
              <TeamworkImg />
              <span> Join Us at our meetups, hack projects and events</span>
            </GenCard>
          </li>
          <li>
            <GenCard>
              <MegaPhoneImg />
              <span>Help advocate to make local government work for today’s world</span>
            </GenCard>
          </li>
          <li>
            <GenCard>
              <CodingImg />
              <span>Help develop open-source projects as a Code for America Brigade</span>
            </GenCard>
          </li>
        </ul>
      </GenCardWrapper>
    </SkillsWrapper>
  )
}
