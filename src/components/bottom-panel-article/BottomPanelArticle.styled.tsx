import styled from 'styled-components';

export const StyledBottomPanelArticle = styled.div`
  display: flex;
  gap: 1rem;
  width: 335px;
`;

export const Image = styled.img`
  width: 105px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledSpan = styled.span`
  color: var(--color-gray-blue);
  font-size: 2rem;
  font-weight: 700;
`;

export const StyledH3 = styled.h3`
  color: var(--color-very-dark-blue);
  font-size: 1rem;
  font-weight: 800;
  transition: color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--color-soft-red);
  }
`;

export const StyledP = styled.p`
  color: var(--color-dark-gray-blue);
  line-height: 1.6;
  font-size: 0.95rem;
`;
