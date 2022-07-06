import AllBooks from './Components/AllBooks.js';
import Header from './Components/Header.js';
import Container from '@mui/material/Container';

const axios = require('axios').default;

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