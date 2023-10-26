import { useEffect } from 'react';
import { LuX } from 'react-icons/lu';
import {
  OverlayContainer,
  Menu,
  CloseButton,
  StyledLink,
  Navigation,
} from './MobileMenu.styled';

export default function MobileMenu({ onClose, style }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <OverlayContainer onClick={handleOverlayClick} style={style}>
      <Menu>
        <CloseButton onClick={onClose}>
          <LuX />
        </CloseButton>
        <Navigation>
          <StyledLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={onClose}
          >
            Home
          </StyledLink>
          <StyledLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={onClose}
          >
            About
          </StyledLink>
          <StyledLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={onClose}
          >
            Projects
          </StyledLink>
          <StyledLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={onClose}
          >
            Contacts
          </StyledLink>
        </Navigation>
      </Menu>
    </OverlayContainer>
  );
}
