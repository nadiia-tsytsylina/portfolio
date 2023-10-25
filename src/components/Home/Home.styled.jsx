import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const Section = styled.section`
  padding: 120px 100px;
  height: 90vh;
  width: 100%;
  color: var(--white-text);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-blue);
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 40px;
  font-size: 68px;
`;

export const Span = styled.span`
  font-weight: 700;
  font-family: Montserrat;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 56px;
  color: var(--light-blue);
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const CvLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  padding: 10px 16px;
  background-color: var(--button-color);
  border-radius: 12px;
  font-size: 30px;
  font-family: inherit;
  color: var(--dark-text);
  width: 232px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--accent-color);
  }
`;

export const ContactsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  padding: 10px 16px;
  background-color: var(--button-color);
  border-radius: 12px;
  font-size: 30px;
  font-family: inherit;
  color: var(--dark-text);
  width: 232px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color);
  }
`;
