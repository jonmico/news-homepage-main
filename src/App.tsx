import styled from 'styled-components';

import Navbar from './components/navbar/Navbar';
import GlobalStyles from './styles/GlobalStyles';

const StyledApp = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: auto;
  padding-top: 3rem;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Navbar />
    </StyledApp>
  );
}

export default App;
