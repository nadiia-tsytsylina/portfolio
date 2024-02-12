import styled from '@emotion/styled';

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1200;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--accent-color);
  font-size: 20px;
  border: none;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;
