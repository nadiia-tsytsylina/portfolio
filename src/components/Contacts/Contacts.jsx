import { LuMapPin } from 'react-icons/lu';
import { FaTelegram, FaGithub } from 'react-icons/fa';
import {
  EMAIL,
  LOCATION,
  MENU_PATH,
  PHONE,
  SOCIAL_LINK,
} from 'constants/constants';
import {
  Section,
  Title,
  ContactContainer,
  ContactList,
  ContactLink,
  Address,
  Span,
  SocialList,
  SocialLink,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <Section id={MENU_PATH.contacts}>
      <Title>Contacts</Title>
      <ContactContainer>
        <ContactList>
          <li>
            <ContactLink href={`mailto:${EMAIL}`}>{EMAIL}</ContactLink>
          </li>
          <li>
            <ContactLink href={`tel:${PHONE}`}>{PHONE}</ContactLink>
          </li>
          <li>
            <Address>
              <LuMapPin style={{ color: 'var(--accent-color)' }} />
              {LOCATION}
              <Span>(ready to relocate)</Span>
            </Address>
          </li>
        </ContactList>
        <SocialList>
          <li>
            <SocialLink
              href={SOCIAL_LINK.telegram.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaTelegram />
              {SOCIAL_LINK.telegram.name}
            </SocialLink>
          </li>
          {/* <li>
            <SocialLink
              href={SOCIAL_LINK.linkedin.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLinkedin />
              {SOCIAL_LINK.linkedin.name}
            </SocialLink>
          </li> */}
          <li>
            <SocialLink
              href={SOCIAL_LINK.gitHub.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaGithub />
              {SOCIAL_LINK.gitHub.name}
            </SocialLink>
          </li>
        </SocialList>
      </ContactContainer>
    </Section>
  );
};
