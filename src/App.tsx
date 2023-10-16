import styled from 'styled-components';

import Navbar from './components/navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/hero/Hero';

const StyledApp = styled.div`
  width: 77.5%;
  margin: auto;
  padding-top: 3rem;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Navbar />
      <Hero />
    </StyledApp>
  );
}

export default App;
