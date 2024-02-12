import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--button-color);
  padding: 4px;
  color: var(--dark-text);
  font-size: 12px;
  border-radius: 8px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--accent-color);
  }

  &:disabled {
    background-color: var(--button-color);
  }

  @media (min-width: 768px) {
    gap: 4px;
    padding: 6px;
    font-size: 18px;
    width: 30px;
    height: 30px;
  }
`;
