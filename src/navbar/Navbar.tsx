import { StyledNavbar, StyledUL, StyledLI } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <img src='/images/logo.svg' alt='' />
      </div>
      <div>
        <StyledUL>
          <StyledLI>Home</StyledLI>
          <StyledLI>New</StyledLI>
          <StyledLI>Popular</StyledLI>
          <StyledLI>Trending</StyledLI>
          <StyledLI>Categories</StyledLI>
        </StyledUL>
      </div>
    </StyledNavbar>
  );
}
