import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { useState, useEffect } from 'react';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Container>
      <Div1>
        <a href='/' style={{display: "flex", alignItems: "center", color: 'white'}}>
          <DiCssdeck size= "3rem"/><span>Portfolio</span>
        </a>
      </Div1>
      <Div2>
        <li>
          {isMounted && (
            <a href='#Projects'>
              <NavLink>Projects</NavLink>
            </a>
          )}
        </li>
        <li>
          {isMounted && (
            <a href='#Technologies'>
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
    </Container>
  );
}



export default Header;
