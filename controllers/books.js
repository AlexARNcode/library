import mysql from 'mysql';
import dbConfig from '../config/dbConfig.js';

const db = mysql.createConnection(dbConfig);

export const getAllBooks = (req, res) => {
    const sql = "SELECT * FROM books";

    db.query(sql, function (err, bookList) {
        if (err) throw err;
        res.send(bookList);
      });
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
    const sql = "SELECT * FROM books WHERE id = ?";
    const sqlParams = [req.params.id];

    db.query(sql, sqlParams, function (err, result) {
      if (err) throw err;
      res.send(result)
    });
}

export const updateBook = (req, res) => {
    const { name, year, category } = req.body

    if (name === undefined || year === undefined || category === undefined) {
      const errorMessage = "Parameters 'name', 'year' and 'category' must be defined to update a book !";
      res.status(500).send(errorMessage);
      throw new Error(errorMessage);
    } 

    const sql = "UPDATE books SET name = ?, year = ?, category = ? WHERE id = ?";
    const sqlParams = [name, year, category, req.params.id];

    db.query(sql, sqlParams, function (err, result) {
      if (err) throw err;
      res.send({message: `The book '${name}' has been updated.`})
    }); 
}

export const deleteBook = (req, res) => {
    const sql = "DELETE FROM books WHERE id = ?";
    const sqlParams = [req.params.id];

    db.query(sql, sqlParams, function (err, result) {
      if (err) throw err;
      res.send(`The book has been deleted`);
    });
}