import Hero from './components/Hero/Hero.js'
import List from './components/List/List.js';
import SearchForm from './components/SearchForm/SearchForm.js'
import Container from './components/Container/Container.js';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;