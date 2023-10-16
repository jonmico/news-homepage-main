import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.75rem;
  color: var(--color-dark-gray-blue);
`;

export const StyledLI = styled.li`
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-soft-red);
  }
`;
