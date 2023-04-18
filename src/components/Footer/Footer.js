import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href='Tel: +1 (908)-356-9827'>+1 (984)-520-7424</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href='mailto:contact@ianinho.com'>contact@ianinho.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one Project at a time.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/ianinho" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ian-simmons-193815241/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/ianinh0/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
