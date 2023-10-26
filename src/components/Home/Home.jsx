import { LuDownload, LuSend } from 'react-icons/lu';
import {
  Section,
  Title,
  Span,
  Subtitle,
  ButtonContainer,
  CvLink,
  ContactsLink,
} from './Home.styled';

export const Home = () => {
  return (
    <Section id="home">
      <div>
        <Title>
          Hey, I'm <Span>Nadiia Tsytsylina</Span>
        </Title>
        <Subtitle>Junior Frontend Developer</Subtitle>
      </div>
      <ButtonContainer>
        <CvLink
          href="https://drive.google.com/file/d/1uBu_jL-roanC9o2Os4oEClICC9s1pWIa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          My CV <LuDownload />
        </CvLink>
        <ContactsLink
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Contact Me <LuSend />
        </ContactsLink>
      </ButtonContainer>
    </Section>
  );
};
