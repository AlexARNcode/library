import React from "react";
import { useState, useEffect } from 'react';

const axios = require('axios').default;

export default function Book() {    
    const [loader, setLoader] = useState();
    const [bookId, setBookId] = useState(12);
    const [bookName, setBookName] = useState();
    const [bookYear, setBookYear] = useState();
    const [bookCategory, setBookCategory] = useState();

    useEffect(() => {
        axios.get('http://localhost:8080/books/12')
        .then(function (response) {
        setLoader(true);
        setBookId(response.data[0].id);
        setBookName(response.data[0].name);
        setBookYear(response.data[0].year);
        setBookCategory(response.data[0].category);
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        setLoader(false);
        });
    }, [])  

    return (
        <div className="App">
            {loader && (
            <>
                Loading..
            </>
            )}

            {bookId && (
            <>
                <h1>{bookName}</h1>
                <i>Année de parution : {bookYear}</i>
                <p>Catégorie : {bookCategory}</p>
            </>
            )}
        </div>
    );      
}