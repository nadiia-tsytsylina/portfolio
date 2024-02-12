import { useEffect } from 'react';
import { LuX } from 'react-icons/lu';
import {
  OverlayContainer,
  Menu,
  CloseButton,
  Navigation,
} from './MobileMenu.styled';
import { TransitionLink } from 'components/reusable/TransitionLink';
import { LINK_VARIANT, MENU_PATH } from 'constants/constants';

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
          <TransitionLink
            variant={LINK_VARIANT.mobile}
            path={MENU_PATH.home}
            onClose={onClose}
          />
          <TransitionLink
            variant={LINK_VARIANT.mobile}
            path={MENU_PATH.about}
            onClose={onClose}
          />
          <TransitionLink
            variant={LINK_VARIANT.mobile}
            path={MENU_PATH.projects}
            onClose={onClose}
          />
          <TransitionLink
            variant={LINK_VARIANT.mobile}
            path={MENU_PATH.contacts}
            onClose={onClose}
          />
        </Navigation>
      </Menu>
    </OverlayContainer>
  );
}
