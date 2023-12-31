import { LuAlignJustify } from 'react-icons/lu';
import Overlay from 'components/MobileMenu/Overlay';
import {
  Container,
  Navigation,
  StyledLink,
  NameContainer,
  Name,
  Logo,
  BurgerButton,
} from './NavBar.styled';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';

export const NavBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setIsOpenMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <>
      <Container>
        <NameContainer>
          <Logo src={logo} alt="avatar" />
          <Name>Nadiia Tsytsylina</Name>
        </NameContainer>
        <BurgerButton type="button" onClick={openMobileMenu}>
          <LuAlignJustify />
        </BurgerButton>
        <Navigation>
          <StyledLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </StyledLink>
          <StyledLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </StyledLink>
          <StyledLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </StyledLink>
          <StyledLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contacts
          </StyledLink>
        </Navigation>
      </Container>
      {isOpenMobileMenu ? (
        <Overlay onClose={closeMobileMenu} />
      ) : (
        <Overlay isClosed={true} />
      )}
    </>
  );
};
