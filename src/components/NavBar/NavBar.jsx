import { LuAlignJustify } from 'react-icons/lu';
import Overlay from 'components/MobileMenu/Overlay';
import { TransitionLink } from 'components/reusable/TransitionLink';
import {
  Container,
  Navigation,
  NameContainer,
  Name,
  Logo,
  BurgerButton,
} from './NavBar.styled';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { LINK_VARIANT, MENU_PATH } from 'constants/constants';

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
          <TransitionLink path={MENU_PATH.home} variant={LINK_VARIANT.nav} />
          <TransitionLink path={MENU_PATH.about} variant={LINK_VARIANT.nav} />
          <TransitionLink
            path={MENU_PATH.projects}
            variant={LINK_VARIANT.nav}
          />
          <TransitionLink
            path={MENU_PATH.contacts}
            variant={LINK_VARIANT.nav}
          />
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
