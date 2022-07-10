import AllBooks from './Components/AllBooks';
import Header from './Components/Header';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
    <Container align="center">
      <Header></Header>
      <AllBooks></AllBooks>
    </Container>
    </>
  );
}

export default App;