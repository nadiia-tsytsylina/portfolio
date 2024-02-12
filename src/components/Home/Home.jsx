import { LuDownload } from 'react-icons/lu';
import {
  Section,
  Title,
  Span,
  Subtitle,
  ButtonContainer,
  CvLink,
} from './Home.styled';
import { TransitionLink } from 'components/reusable/TransitionLink';
import { CV_LINK, LINK_VARIANT, MENU_PATH } from 'constants/constants';

export const Home = () => {
  return (
    <Section id={MENU_PATH.home}>
      <div>
        <Title>
          Hey, I'm <Span>Nadiia Tsytsylina</Span>
        </Title>
        <Subtitle>Junior Frontend Developer</Subtitle>
      </div>
      <ButtonContainer>
        <CvLink
          href={CV_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          My CV <LuDownload />
        </CvLink>
        <TransitionLink variant={LINK_VARIANT.home} />
      </ButtonContainer>
    </Section>
  );
};
