import { Header } from './components/Header';
import { Container } from './components/Container/Container';
import { Main } from './components/Main';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
