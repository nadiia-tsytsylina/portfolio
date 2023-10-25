import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 40px;
  width: 100%;
  color: var(--white-text);
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-top: 1px solid var(--light-blue);
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  color: var(--light-blue);
  text-transform: uppercase;
  font-family: Montserrat;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 440px;
`;

export const ContactLink = styled.a`
  font-weight: 400;
  font-size: 24px;
  color: var(--accent-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: var(--light-blue);
  }
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  font-size: 28px;
  color: var(--white-text);
  font-style: normal;
`;

export const Span = styled.span`
  color: var(--accent-color);
  font-size: 24px;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 440px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  font-size: 24px;
  color: var(--accent-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: var(--light-blue);
  }
`;
