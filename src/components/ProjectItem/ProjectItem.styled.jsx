import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 70%
  );

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 70px;
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
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 45%;
  }
`;

export const DescrContainer = styled.div`
  padding: 10px 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    padding: 10px 0 20px;
    gap: 20px;
  }
`;

export const Title = styled.h3`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  color: var(--accent-color);

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TechList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 8px;
  justify-content: center;

  @media (min-width: 768px) {
    row-gap: 6px;
    column-gap: 10px;
  }
`;

export const TechItem = styled.li`
  padding: 4px;
  color: var(--white-text);
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: context-menu;

  &:hover {
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: var(--white-text);
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: var(--button-color);
  padding: 6px 2px;
  width: 98px;
  color: var(--dark-text);
  font-size: 18px;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--accent-color);
  }

  @media (min-width: 768px) {
    gap: 4px;
    padding: 8px 0;
    width: 150px;
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    width: 130px;
  }
`;
