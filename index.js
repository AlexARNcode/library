import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 8080;

app.use(bodyParser.json())

app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);

let books = [];

// Create a new book
app.post('/books', (req, res) => {
    books.push({ id: uuidv4() ,... req.body })

    res.send({
        message: `The book '${req.body.name}' has been added.`
    })
})

// Get all books
app.get('/books', (req, res) => {
    res.send(books)
})

// Get a specific boo,
app.get('/books/:id', (req, res) => {
    res.send(
        books.find((book) => book.id == req.params.id )
    )
})

// Update a book
app.patch('/books/:id', (req, res) => {
    const { name, year, category } = req.body
    const book = books.find((book) => book.id == req.params.id)

    if (name) book.name = name
    if (year) book.year = year
    if (category) book.category = category

    res.send(`The book '${book.name}' updated`)
})

// Delete a book
app.delete('/books/:id', (req, res) => {
    books = books.filter((book) => book.id != req.params.id)

    res.send(`The book with the id ${req.params.id} has been deleted`)
})