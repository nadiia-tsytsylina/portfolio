import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--dark-background);
  z-index: 1;
  font-family: Montserrat;

  @media (min-width: 768px) {
    height: 80px;
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--accent-color);
  font-size: 20px;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 20px 0;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--white-text);
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: var(--accent-color);
  }

  &:hover,
  :focus {
    color: var(--accent-color);
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const Name = styled.h2`
  color: var(--accent-color);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
