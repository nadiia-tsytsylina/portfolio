import { nanoid } from 'nanoid';
import { skills } from 'data/skills';
import { MENU_PATH } from 'constants/constants';
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

export const About = () => {
  return (
    <Section id={MENU_PATH.about}>
      <Title>About me</Title>
      <Container>
        <AboutContainer>
          <Subtitle>Let's get acquainted!</Subtitle>
          <TextContainer>
            <AboutText>
              I am a high-performing software engineer capable of working in a
              highly agile software development process. Experienced in covering
              complex tasks with tight deadlines.
            </AboutText>
            <AboutText>
              I successfully completed a three-month internship at ZenBitTech as
              a Full-Stack Developer. During that time, I explored a wide range
              of technologies, strengthened my problem-solving skills, and
              gained hands-on experience that fundamentally shaped my approach
              to coding.
            </AboutText>
            <AboutText>
              Currently, I work at CGS-Team as a Full-Stack Developer, bringing
              real-world commercial experience to my projects. I take pride in
              quickly learning new tools and frameworks, writing clean and
              maintainable code, and always striving to meet deadlines without
              compromising quality.
            </AboutText>
            <AboutText>
              I love challenges that push me to grow, enjoy collaborating with
              teammates, and believe that every project is an opportunity to
              learn something new and make a meaningful impact.
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
