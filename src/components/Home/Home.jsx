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
import CV from '../../assets/images/cv.pdf';

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
        <CvLink href={CV} download>
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
