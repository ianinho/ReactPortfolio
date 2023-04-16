import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useRef } from 'react';
import { HiCloudDownload } from 'react-icons/hi';

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
              My Personal Portfolio!
          </SectionTitle>
          <SectionText>
            My name is Ian Simmons and I am a Full-Time and Freelance React/Shopify Developer.
            Please see more about me and some of my work below.
          </SectionText>
          <Button onClick={downloadResume}>CV/Resume<HiCloudDownload size= "4rem"/></Button>
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