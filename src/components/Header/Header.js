import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{disply:"flex",alignment:"center",color:'white',marginBottom:'20px'}}></a>
        <DiCssdeck size="3rem"/> <span >Portfolio</span>
      </Link>
    </Div1>
    <Div2>

      <li>
        <Link href="#projects">
          <NavLink> Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink> Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink> About</NavLink>
        </Link>
      </li>
     
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sbravindran03">
        <AiFillGithub size ="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ravindran-s-b-51b54a243/">
        <AiFillLinkedin size ="3rem"/>

      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/ravindran_s_b_?igsh=YXE4aDExc3B5OGpt">
        <AiFillInstagram size ="3rem"/>

      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
