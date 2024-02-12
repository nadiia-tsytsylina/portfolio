import { LuSend } from 'react-icons/lu';
import { LINK_VARIANT, MENU_PATH } from 'constants/constants';
import { StyledLink, ContactsLink, MobileLink } from './TransitionLink.styled';

export const TransitionLink = ({ path, variant, onClose }) => {
  return (
    <>
      {variant === LINK_VARIANT.nav && (
        <StyledLink
          to={path}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          {path.toUpperCase()}
        </StyledLink>
      )}
      {variant === LINK_VARIANT.home && (
        <ContactsLink
          to={MENU_PATH.contacts}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Contact Me <LuSend />
        </ContactsLink>
      )}
      {variant === LINK_VARIANT.mobile && (
        <MobileLink
          to={path}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={onClose}
        >
          {path.toUpperCase()}
        </MobileLink>
      )}
    </>
  );
};
