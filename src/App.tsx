import styled from 'styled-components';

import Navbar from './components/navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/hero/Hero';

const StyledApp = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 3rem;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <h1>Hi, Mom.</h1>
      <h1>Hi, Mom (again).</h1>
    </StyledApp>
  );
}

export default App;
