import styled from 'styled-components';

export const StyledSidePanelArticle = styled.div`
  border-bottom: 1px solid var(--color-dark-gray-blue);
  padding: 1.75rem 0 2rem 0;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0.5rem;
  }
`;

export const StyledH3 = styled.h3`
  color: var(--color-off-white);
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  display: inline-block;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-soft-orange);
    cursor: pointer;
  }
`;

export const StyledP = styled.p`
  font-size: 0.9rem;
  line-height: 1.75;
`;
