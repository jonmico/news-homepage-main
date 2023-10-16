import styled from 'styled-components';

export const StyledSidePanelArticle = styled.div`
  border-bottom: 1px solid var(--color-dark-gray-blue);
  padding-bottom: 2rem;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const StyledH3 = styled.h3`
  color: var(--color-off-white);
  margin-bottom: 0.75rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-soft-orange);
    cursor: pointer;
  }
`;

export const StyledP = styled.p`
  color: var(--color-gray-blue);
  line-height: 1.5;
  font-size: 0.95rem;
`;
