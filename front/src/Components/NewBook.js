import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { TextField, Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";
import addBook from "../helper/api/addBook";
import ReturnHome from "./ReturnHome";
import Header from "./Header";

export default function NewBook() {    
    const [bookName, setBookName] = useState("");
    const [bookYear, setBookYear] = useState("");
    const [bookCategory, setBookCategory] = useState("");
    const nameField = React.useRef(null);
    const yearField = React.useRef(null);
    const categoryField = React.useRef(null);

    function resetForm() {
        nameField.current.value="";
        yearField.current.value="";
        categoryField.current.value="";
    }

    return (
        <Container align="center">
            <Header />
            <ReturnHome></ReturnHome>

            <Typography align="center" variant="h2" sx={{ mb: 3 }}>
                New book
            </Typography>
  
                <Box>
                    <TextField 
                            value={bookName}
                            onChange={(e) => {
                                setBookName(e.target.value);
                            }}
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" 
                            inputRef={nameField}
                            />
                </Box>
                <Box>
                    <TextField 
                            value={bookYear}
                            onChange={(e) => {
                                setBookYear(e.target.value);
                            }}
                            id="outlined-basic" 
                            label="Publication year" 
                            variant="outlined"
                            inputRef={yearField}
                            />
                </Box>
                <Box>
                <TextField 
                        value={bookCategory}
                        onChange={(e) => {
                            setBookCategory(e.target.value);
                        }}
                        id="outlined-basic" 
                        label="Category" 
                        variant="outlined"
                        inputRef={categoryField}
                        />
                </Box>
                    
                    <CustomButton 
                        text="SAVE" 
                        sx={{ mt: 3 }}
                        onClick={() => {
                            addBook(bookName, bookYear, bookCategory);
                            resetForm();
                            }
                        }>
                    </CustomButton>
        </Container>
    );      
}