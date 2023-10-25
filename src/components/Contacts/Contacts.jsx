import { LuMapPin } from 'react-icons/lu';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <Section id="contacts">
      <Title>Contacts</Title>
      <ContactContainer>
        <ContactList>
          <li>
            <ContactLink href="mailto:miniova95@gmail.com">
              miniova95@gmail.com
            </ContactLink>
          </li>
          <li>
            <ContactLink href="tel:+380961640306">+380 96 164 0306</ContactLink>
          </li>
          <li>
            <Address>
              <LuMapPin style={{ color: 'var(--accent-color)' }} />
              Lviv, Ukraine<Span>(ready to relocate)</Span>
            </Address>
          </li>
        </ContactList>
        <SocialList>
          <li>
            <SocialLink
              href="https://t.me/Nadiia_tsytsylina"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaTelegram />
              Telegram
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/nadiia-tsytsylina/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLinkedin />
              Linkedin
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://github.com/nadiia-tsytsylina"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaGithub />
              GitHub
            </SocialLink>
          </li>
        </SocialList>
      </ContactContainer>
    </Section>
  );
};
