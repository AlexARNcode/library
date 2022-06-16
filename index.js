import express from 'express';
import bodyParser from 'body-parser';

import booksRoutes from './routes/books.js'

const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use('/books', booksRoutes);

app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);




