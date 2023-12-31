import { nanoid } from 'nanoid';
import {
  Section,
  Title,
  Subtitle,
  Container,
  AboutContainer,
  TextContainer,
  AboutText,
  SkillsContainer,
  SkillsList,
  SkillsItem,
} from './About.styled';
import { skills } from 'data/skills';

export const About = () => {
  return (
    <Section id="about">
      <Title>About me</Title>
      <Container>
        <AboutContainer>
          <Subtitle>Let's get acquainted!</Subtitle>
          <TextContainer>
            <AboutText>
              I'm a Junior Front-End developer. I possess HTML, CSS, JavaScript,
              React and Next.js knowledge. I have experience working on both
              team and individual projects.
            </AboutText>
            <AboutText>
              During my studies, I took part in 3 team projects, 3 individual
              ones, and I also have one individual Pet project. I have
              experience working in Team Challenge on a team project, where I
              was one of two Frontend Developers.
            </AboutText>
            <AboutText>
              My goal is to join a team that is both friendly and professional,
              where I can enhance my skills and contribute to achieving team
              results. I have a talent for quickly acquiring new skills and
              absorbing new information. I am diligent in completing my tasks
              promptly and never fail to meet deadlines.
            </AboutText>
          </TextContainer>
        </AboutContainer>
        <SkillsContainer>
          <Subtitle>My skills</Subtitle>
          <SkillsList>
            {skills.map(skill => {
              return <SkillsItem key={nanoid()}>{skill}</SkillsItem>;
            })}
          </SkillsList>
        </SkillsContainer>
      </Container>
    </Section>
  );
};
