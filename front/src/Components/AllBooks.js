import React from "react";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";

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
            <Link underline="none" href="#" onClick={() => getBook(book.id)}>
                <Box>
                    <Card key={book.id} variant="outlined" sx={{ maxWidth: 1000 }}>
                        <CardContent>
                            <Typography variant="h2">
                                {book.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                Année de parution : {book.year}
                            </Typography>
                            <Typography color="text.secondary">
                                Catégorie : {book.category}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Link>
            ))}
      </div>
    );      
}