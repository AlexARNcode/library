import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Card, CardActions, CardContent, TextField, Typography, Container } from '@mui/material';
import CustomButton from "./CustomButton";
import deleteBook from "../helper/api/deleteBook";
import ReturnHome from "./ReturnHome";
import Header from "./Header";
import updateBook from "../helper/api/updateBook";
import setAuthToken from "../helper/authToken";

const axios = require('axios').default;

export default function Book() {    
    const [bookId, setBookId] = useState(12);
    const [bookName, setBookName] = useState();
    const [bookYear, setBookYear] = useState();
    const [bookCategory, setBookCategory] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const bookNameField = React.useRef(null);
    const bookYearField = React.useRef(null);
    const bookCategoryField = React.useRef(null);

    let params = useParams();

    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }

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

    function toggleEdit() {
        if (isEditing === true) {
            setIsEditing(false);
        } else {
            setIsEditing(true)
        }
    }

    return (
        <Container align="center">
            <Header></Header>
            <ReturnHome />
            
            {isEditing && (
                 <Container sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Update "{bookName}"</Typography>
                 <Box>
                     <TextField id="filled-basic" label="Name" variant="outlined" defaultValue={bookName} inputRef={bookNameField} />
                 </Box>
                 <Box>
                     <TextField id="filled-basic" label="Year" variant="outlined" defaultValue={bookYear} inputRef={bookYearField} />
                 </Box>
                 <Box>
                     <TextField id="filled-basic" label="Category" variant="outlined" defaultValue={bookCategory} inputRef={bookCategoryField} />
                 </Box>
                 <CustomButton 
                    text='SAVE' 
                    sx={{ m: 1 }} 
                    onClick={() => updateBook(bookId, bookNameField.current.value, bookYearField.current.value, bookCategoryField.current.value)}>
                </CustomButton>
                <CustomButton 
                    text='CANCEL' 
                    sx={{ m: 1 }} 
                    onClick={() => toggleEdit()}>
                    </CustomButton>
             </Container>
            )}
           
            <Box>
                <Card key={bookId} variant="outlined" sx={{ maxWidth: 1000 }}>
                    <CardContent>
                        <Typography variant="h2">
                            {bookName}  
                        </Typography>
                        <Typography variant="subtitle1">
                            Ann??e de parution : {bookYear}
                        </Typography>
                        <Typography color="text.secondary">
                            Cat??gorie : {bookCategory}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Container align="center">
                            {isEditing === false && (
                                <>
                                <CustomButton text='DELETE' sx={{ m: 1 }} onClick={() => deleteBook(bookId)}></CustomButton>
                                <CustomButton text='UPDATE' sx={{ m: 1 }} onClick={() => toggleEdit()}></CustomButton>
                                </> 
                            )}
                        </Container>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );      
}