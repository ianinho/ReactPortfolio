import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
<section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, visit, source, showVisit, showSource}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo> <br />
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
                ))}
            </TagList>
          </div>
          <UtilityList>
            {showVisit ? <ExternalLinks href={visit}>Visit</ExternalLinks> : null}
            {showSource ? <ExternalLinks href={source}>Source Code</ExternalLinks> : null}
          </UtilityList>
          
        </BlogCard>
      ))}


    </GridContainer>

</section>
);

export default Projects;