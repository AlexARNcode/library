import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js'
import mysql from 'mysql';
import dbConfig from './config/config.js';

const app = express();
const PORT = 8080;

const db = mysql.createConnection(dbConfig);

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

app.use(bodyParser.json())
app.use('/books', booksRoutes);

app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);




