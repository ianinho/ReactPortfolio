import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { useState, useEffect } from 'react';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, } from './HeaderStyles';

const Header = () =>  {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Container>
      <Div1>
        <a href='/' style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size= "3rem"/><Span>Portfolio</Span>
        </a>
      </Div1>
      <Div2>
        <li>
          {isMounted && (
            <a href='#projects'>
              <NavLink>Projects</NavLink>
            </a>
          )}
        </li>
        <li>
          {isMounted && (
            <a href='#tech'>
              <NavLink>Technologies</NavLink>
            </a>
          )}
        </li>
        <li>
          {isMounted && (
            <a href='#About'>
              <NavLink>About</NavLink>
            </a>
          )}
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/ianinho'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/ian-simmons-193815241/'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://instagram'>
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
  );
}



export default Header;
