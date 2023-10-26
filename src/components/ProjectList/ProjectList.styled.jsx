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
