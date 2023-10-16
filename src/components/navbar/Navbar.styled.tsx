import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledUL = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  color: var(--color-dark-gray-blue);
`;

export const StyledLI = styled.li`
  cursor: pointer;

  &:hover {
    color: var(--color-soft-red);
  }
`;
