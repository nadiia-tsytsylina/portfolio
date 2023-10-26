import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 20px;
  width: 100%;
  color: var(--white-text);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

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
