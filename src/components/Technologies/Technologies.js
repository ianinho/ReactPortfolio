import React from 'react';
import { DiFirebase, DiReact, DiWindows } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development and IT world. From Front-End to Back-End.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size= "3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML <br />
            CSS <br /> 
            React.js <br />
            Shopify Website Creation
            

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size= "3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases <br />
            Shopify Back-End Applications 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWindows size= "3rem"/>
        <ListContainer>
          <ListTitle>IT Support</ListTitle>
          <ListParagraph>
            Experience with <br />
            Active Directory <br />
            VPN Support <br />
            Office 365 Support <br />
            Single-Sign-On(SSO) 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </section>
);

export default Technologies;
