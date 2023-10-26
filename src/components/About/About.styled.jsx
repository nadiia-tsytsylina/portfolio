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
  border-bottom: 1px solid var(--light-blue);

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

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  color: var(--accent-color);
  font-family: Montserrat;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 80px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
    gap: 20px;
  }

  /* @media (min-width: 1024px) {
    padding-right: 40px;
  } */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutText = styled.p`
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
    gap: 20px;
  }

  /* @media (min-width: 1024px) {
    padding-left: 40px;
  } */
`;

export const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 10px;

  @media (min-width: 768px) {
    column-gap: 12px;
    row-gap: 16px;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    column-gap: 16px;
    row-gap: 20px;
  }
`;

export const SkillsItem = styled.li`
  background-color: var(--button-color);
  padding: 6px 8px;
  color: var(--dark-text);
  font-size: 18px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: context-menu;
  text-align: center;

  &:hover {
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    padding: 10px 16px;
    font-size: 24px;
    text-align: start;
  }
`;
