import styled from 'styled-components';
import { EntryList } from './components/EntryList';

function App() {

  return (
    <AppWrapper>
      <Header></Header>
      <EntryList />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
