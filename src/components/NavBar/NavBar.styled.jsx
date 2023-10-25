import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: var(--dark-background);
  z-index: 1;
  font-family: Montserrat;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  padding: 20px 0;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--white-text);
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &.active {
    color: var(--accent-color);
  }

  &:hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h2`
  color: var(--accent-color);
  text-transform: uppercase;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;
