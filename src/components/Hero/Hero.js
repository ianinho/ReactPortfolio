import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useRef } from 'react';

const Hero = (props) => {
  const resumeLinkRef = useRef();

  const downloadResume = () => {
    if (resumeLinkRef.current) {
      resumeLinkRef.current.click();
    }
  };
  const resumeFilePath = '/Resume-Ian-Simmons.pdf';

  return (
    <section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome to<br/>
              My Personal Portfolio
          </SectionTitle>
          <SectionText>
            Freelance React/Shopify Developer
          </SectionText>
          <Button onClick={downloadResume}>CV/Resume</Button>
          <a
            ref={resumeLinkRef}
            href={resumeFilePath}
            download
            style={{ display: 'none' }}
          >
            Download Resume
          </a>
      </LeftSection>
    </section>
  );
};

export default Hero;