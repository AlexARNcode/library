import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const axios = require('axios').default;

export default function Book() {    
    const [bookId, setBookId] = useState(12);
    const [bookName, setBookName] = useState();
    const [bookYear, setBookYear] = useState();
    const [bookCategory, setBookCategory] = useState();

    let params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/books/${params.id}`)
        .then(function (response) {
        
        setBookId(response.data[0].id);
        setBookName(response.data[0].name);
        setBookYear(response.data[0].year);
        setBookCategory(response.data[0].category);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            
        });
    }, [])  

    return (
        <Container align="center">
            <Link to="/">Retour</Link>
            <Box>
                <Card key={bookId} variant="outlined" sx={{ maxWidth: 1000 }}>
                    <CardContent>
                        <Typography variant="h2">
                            {bookName}  
                        </Typography>
                        <Typography variant="subtitle1">
                            Année de parution : {bookYear}
                        </Typography>
                        <Typography color="text.secondary">
                            Catégorie : {bookCategory}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );      
}