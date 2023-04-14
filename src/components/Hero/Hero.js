import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <section row nopadding>
    <LeftSection>
        <SectionTitle main center>
            Welcome to<br/>
            My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Freelance React/Shopify Developer
        </SectionText>
        <Button onClick={() => window.location.href = 'https://www.google.com'}>Learn more</Button>

    </LeftSection>
  
  </section>
);

export default Hero;