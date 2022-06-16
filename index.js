
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

// Create
app.post('/books', (req, res) => {
    id += 1
    books.push({ id: id ,... req.body })

    res.send({
        message: `The book '${req.body.name}' has been added.`
    })
})

// Read
app.get('/books', (req, res) => {
    res.status(200).send(books)
})

// Read 2
app.get('/books/:id', (req, res) => {
    res.send(
        books.find((book) => book.id == req.params.id )
    )
})

// Update
app.patch('/books/:id', (req, res) => {
    const book = books.find((book) => book.id == req.params.id)

    book.name = 'PWEEEEEET'

    res.send(`The book '${book.name}' updated`)

    console.log(bookToBeUpdated)
})

// Delete
app.delete('/books/:id', (req, res) => {
    books = books.filter((book) => book.id != req.params.id)

    res.send(`The book with the id ${req.params.id} has been deleted`)
})

