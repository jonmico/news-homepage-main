import styled from 'styled-components';

export const StyledArticle = styled.div`
  display: flex;
  grid-area: main;
`;

export const StyledH1 = styled.h1`
  color: var(--color-very-dark-blue);
  font-size: 3.25rem;
  line-height: 1;
  font-weight: 800;
  width: 100%;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const StyledP = styled.p`
  line-height: 1.5;
  font-size: 0.95rem;
  color: var(--color-dark-gray-blue);
`;

export const Link = styled.a`
  display: inline-block;
  background-color: var(--color-soft-red);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-off-white);
  padding: 1rem 0;
  text-align: center;
  width: 200px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-very-dark-blue);
  }
`;
