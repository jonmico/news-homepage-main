import styled from 'styled-components';

export const StyledSidePanelArticle = styled.div`
  border-bottom: 1px solid var(--color-dark-gray-blue);
  padding: 2rem 0;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0.75rem;
  }
`;

export const StyledH3 = styled.h3`
  /* padding-top: 2rem; */
  color: var(--color-off-white);
  margin-bottom: 1rem;
  font-size: 1.25rem;
  display: inline-block;

  &:hover {
    color: var(--color-soft-orange);
    cursor: pointer;
  }
`;

export const StyledP = styled.p`
  font-size: 0.9rem;
`;
