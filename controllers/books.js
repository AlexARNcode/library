import { v4 as uuidv4 } from 'uuid';
import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';

const db = mysql.createConnection(dbConfig);

let books = [];

export const getAllBooks = (req, res) => {
    res.send(books)
}

export const addBook = (req, res) => {
    const sql = `INSERT INTO books (name, year, category) 
                    VALUES (?, ?, ?)`;
    const sqlParams = [req.body.name, req.body.year, req.body.category];

    db.query(sql, sqlParams, function (err, result) {
      if (err) throw err;
      res.send({
        message: `The book '${req.body.name}' has been added.`
         })
    });
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