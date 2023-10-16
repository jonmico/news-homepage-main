import styled from 'styled-components';

export const StyledSidePanel = styled.div`
  background-color: var(--color-very-dark-blue);
  color: var(--color-gray-blue);
  padding: 1.5rem 2rem;
  grid-row: 1 / -1;
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledH2 = styled.h2`
  color: var(--color-soft-orange);
  font-size: 2.5rem;
  /* padding-bottom: 1.75rem; */
`;
