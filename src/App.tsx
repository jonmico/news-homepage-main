import styled from 'styled-components';

import Navbar from './components/navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles';

const StyledApp = styled.div`
  width: 1100px;
  /* max-width: 1100px; */
  display: grid;
  grid-template-columns: auto 365px;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    'nav nav'
    'image side'
    'article side'
    'small small';
  margin: auto;
  padding-top: 3rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
      </StyledApp>
    </>
  );
}

export default App;
