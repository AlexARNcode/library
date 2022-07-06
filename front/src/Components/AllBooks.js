import React from "react";
import { useState, useEffect } from 'react';

const axios = require('axios').default;

function getBook(bookId) {
    console.log('test : ' + bookId);
}

export default function AllBooks() {    
    const [books, setBooks] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/books/')
        .then(function (response) {
            setBooks(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });
    }, [])  

    return (
        <div>
            {books && books.map((book) => (
            <>
                <h1 key={book.id}>
                    <a href="#" onClick={() => getBook(book.id)}>{book.name}</a>
                </h1>
                <i>Année de parution : {book.year}</i>
                <p>Catégorie : {book.category}</p>
            </>
            ))}
      </div>
    );      
}