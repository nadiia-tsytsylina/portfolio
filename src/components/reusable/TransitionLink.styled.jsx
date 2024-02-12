import styled from '@emotion/styled';
import { Link } from 'react-scroll';

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

export const ContactsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  padding: 6px 8px;
  background-color: var(--button-color);
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  color: var(--dark-text);
  width: 128px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    padding: 10px 16px;
    font-size: 30px;
    width: 232px;
  }
`;

export const MobileLink = styled(Link)`
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

  @media (min-width: 768px) {
    display: none;
  }
`;
