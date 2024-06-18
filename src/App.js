import styled from 'styled-components';
import { EntryList } from './components/EntryList';
import { EntryForm } from './components/EntryForm';

function App() {

  return (
    <AppWrapper>
      <Header></Header>
      <EntryForm />
      <EntryList />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
`;

export default App;
