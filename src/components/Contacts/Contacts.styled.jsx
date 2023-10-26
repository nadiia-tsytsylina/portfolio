import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 20px;
  width: 100%;
  color: var(--white-text);
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid var(--light-blue);

  @media (min-width: 768px) {
    padding: 40px;
    gap: 30px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 32px;
  color: var(--light-blue);
  text-transform: uppercase;
  font-family: Montserrat;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 80px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* width: 440px; */

  @media (min-width: 768px) {
    gap: 20px;
    /* width: 440px; */
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    width: 440px;
    align-items: center;
  }
`;

export const ContactLink = styled.a`
  font-weight: 400;
  font-size: 18px;
  color: var(--accent-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: var(--light-blue);
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 20px;
  color: var(--white-text);
  font-style: normal;

  @media (min-width: 768px) {
    font-size: 28px;
    gap: 6px;
  }
`;

export const Span = styled.span`
  color: var(--accent-color);
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* width: 440px; */

  @media (min-width: 768px) {
    gap: 20px;
    /* width: 440px; */
  }

  @media (min-width: 1024px) {
    width: 440px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 18px;
  color: var(--accent-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: var(--light-blue);
  }

  @media (min-width: 768px) {
    font-size: 24px;
    gap: 6px;
  }
`;
