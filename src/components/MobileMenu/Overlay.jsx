import { MobileMenu } from './MobileMenu';

export const Overlay = ({ onClose, isClosed }) => {
  return (
    <>
      {isClosed ? (
        <MobileMenu
          onClose={onClose}
          style={{
            transform: 'translateX(100%)',
            transition: 'transform 250ms ease-in-out',
          }}
        />
      ) : (
        <MobileMenu
          onClose={onClose}
          style={{
            transform: 'translateX(0)',
            transition: 'transform 250ms ease-in-out',
          }}
        />
      )}
    </>
  );
};
