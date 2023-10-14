import styled from 'styled-components';

import Navbar from './navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles';

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
      <h1>Hi, Mom.</h1>
    </StyledApp>
  );
}

export default App;
