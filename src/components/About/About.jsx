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
              I'm a Junior Front-End developer. I possess HTML, CSS, JavaScript,
              TypeScript, React and Next.js knowledge. I have experience working
              on both team and individual projects.
            </AboutText>
            <AboutText>
              I have been coding for more, than 1 year and during this time I
              have done 5 successful team projects and 5 individual ones. I have
              experience working in a Team Challenge on a team project, where I
              was one of two Frontend Developers.
            </AboutText>
            <AboutText>
              Successfully completed a three-month internship at ZenBitTech on
              Full-Stack developer position. During this time, I mastered many
              new technologies and improved my skills. After the internship, I
              can say with confidence that my approach to writing code has
              radically changed and I gained incredible work experience
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
