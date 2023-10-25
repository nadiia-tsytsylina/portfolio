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
  border-bottom: 1px solid var(--light-blue);
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 40px;
  color: var(--light-blue);
  text-transform: uppercase;
  font-family: Montserrat;
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  color: var(--accent-color);
  font-family: Montserrat;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const AboutContainer = styled.div`
  text-align: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutText = styled.p`
  font-size: 24px;
`;

export const SkillsContainer = styled.div`
  text-align: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
`;

export const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 20px;
`;

export const SkillsItem = styled.li`
  background-color: var(--button-color);
  padding: 10px 16px;
  color: var(--dark-text);
  font-size: 24px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: context-menu;

  &:hover {
    background-color: var(--accent-color);
  }
`;
