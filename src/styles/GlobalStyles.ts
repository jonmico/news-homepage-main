import { createGlobalStyle } from 'styled-components';

// mobile: 375px
// desktop: 1440px

const GlobalStyles = createGlobalStyle`
:root {
  --color-soft-orange: hsl(35, 77%, 62%);
  --color-soft-red: hsl(5, 85%, 63%);
  --color-off-white: hsl(36, 100%, 99%);
  --color-gray-blue: hsl(233, 8%, 79%);
  --color-dark-gray-blue: hsl(236, 13%, 42%);
  --color-very-dark-blue: hsl(240, 100%, 5%)
}

*, 
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0
}

body {
  font-family: 'Inter', sans-serif;
}
`;

export default GlobalStyles;
