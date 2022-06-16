
const app = require('express')();
const PORT = 8080;
const bp = require('body-parser');
const res = require('express/lib/response');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.listen(
    PORT,
    console.log(`Alive on http://localhost:${PORT}`)
);

let id = 0
books = [];

// Create a new book
app.post('/books', (req, res) => {
    id += 1
    books.push({ id: id ,... req.body })

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
    console.log(req.body)
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