import styled from '@emotion/styled';
import { Link } from 'react-scroll';

export const Section = styled.section`
  padding: 80px 40px;
  height: 90vh;
  width: 100%;
  color: var(--white-text);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-blue);
  gap: 20px;

  @media (min-width: 768px) {
    padding: 100px 60px;

    @media (min-width: 1024px) {
      padding: 120px 100px;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
  font-size: 48px;

  @media (min-width: 768px) {
    font-size: 58px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 68px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
  font-family: Montserrat;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
  color: var(--light-blue);

  @media (min-width: 768px) {
    font-size: 46px;
  }

  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 50px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

export const CvLink = styled.a`
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

  &:hover {
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    padding: 10px 16px;
    font-size: 30px;
    width: 232px;
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
