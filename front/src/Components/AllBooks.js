import React from "react";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import setAuthToken from "../helper/authToken";

const axios = require('axios').default;

export default function AllBooks() {    
    const [books, setBooks] = useState();

    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }

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
            <Link to="/book/add">
                <CustomButton text='ADD A BOOK' sx={{ mb: 2 }}></CustomButton>
            </Link>
            
            {books && books.map((book) => (
            <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
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