import styled from 'styled-components';
import { EntryList } from './components/EntryList';
import { EntryForm } from './components/EntryForm';

function App() {

  return (
    <AppWrapper>
      <header></header>
      <EntryForm />
      <EntryList />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default App;
