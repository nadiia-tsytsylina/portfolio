import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 70px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 70%
  );

  &:nth-of-type(even) {
    flex-direction: row-reverse;

    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const Image = styled.img`
  width: 45%;
  border-radius: 20px;
  object-fit: cover;
`;

export const DescrContainer = styled.div`
  padding: 10px 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h3`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 32px;
  color: var(--accent-color);
`;

export const TechList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 6px;
  column-gap: 10px;
  justify-content: center;
`;

export const TechItem = styled.li`
  padding: 4px;
  color: var(--white-text);
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: context-menu;

  &:hover {
    background-color: var(--accent-color);
  }
`;

export const Description = styled.p`
  color: var(--white-text);
  font-size: 20px;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: var(--button-color);
  padding: 8px 0;
  width: 150px;
  color: var(--dark-text);
  font-size: 24px;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--accent-color);
  }
`;
