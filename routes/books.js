import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let books = [];

router.get('/',  (req, res) => {
    res.send(books)
});

router.post('/', (req, res) => {
    books.push({ id: uuidv4() ,... req.body })

    res.send({
        message: `The book '${req.body.name}' has been added.`
    })
})

router.get('/:id', (req, res) => {
    res.send(
        books.find((book) => book.id == req.params.id )
    )
})

router.patch('/:id', (req, res) => {
    const { name, year, category } = req.body
    const book = books.find((book) => book.id == req.params.id)

    if (name) book.name = name
    if (year) book.year = year
    if (category) book.category = category

    res.send(`The book '${book.name}' updated`)
})

router.delete('/:id', (req, res) => {
    books = books.filter((book) => book.id != req.params.id)

    res.send(`The book with the id ${req.params.id} has been deleted`)
})

export default router;