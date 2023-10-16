import styled from 'styled-components';

export const StyledHero = styled.div`
  display: grid;
  grid-template-columns: auto 31%;
  grid-template-rows: auto auto;
  padding-top: 3rem;
  gap: 0 2rem;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;

  display: block;
`;

export const Main = styled.main`
  display: flex;
`;

export const StyledH1 = styled.h1`
  font-size: 3.5rem;
  color: var(--color-very-dark-blue);
  line-height: 1;
`;

export const MainInfo = styled.div`
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledP = styled.p`
  line-height: 1.75;
  color: var(--color-dark-gray-blue);
`;

export const Link = styled.a`
  text-transform: uppercase;
  display: inline-block;
  background-color: var(--color-soft-red);
  color: var(--color-off-white);
  letter-spacing: 0.25rem;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    background-color: var(--color-very-dark-blue);
    cursor: pointer;
  }
`;
