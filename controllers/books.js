import { v4 as uuidv4 } from 'uuid';

let books = [];

export const getAllBooks = (req, res) => {
    res.send(books)
}

export const addBook = (req, res) => {
    books.push({ id: uuidv4() ,... req.body })

    res.send({
        message: `The book '${req.body.name}' has been added.`
    })
}

export const getBook = (req, res) => {
    res.send(
        books.find((book) => book.id == req.params.id )
    )
}

export const updateBook = (req, res) => {
    const { name, year, category } = req.body
    const book = books.find((book) => book.id == req.params.id)

    if (name) book.name = name
    if (year) book.year = year
    if (category) book.category = category

    res.send(`The book '${book.name}' updated`)
}

export const deleteBook = (req, res) => {
    books = books.filter((book) => book.id != req.params.id)

    res.send(`The book with the id ${req.params.id} has been deleted`)
}