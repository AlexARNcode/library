import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import { useState } from "react";
import addBook from "../helper/api/addBook";

export default function NewBook() {    
    const [bookName, setBookName] = useState("");
    const [bookYear, setBookYear] = useState("");
    const [bookCategory, setBookCategory] = useState("");

    return (
        <Container align="center">
            <Box sx={{ mb: 3 }}>
                <Link to="/" style={{ 
                        fontFamily: "Roboto", 
                        textDecoration: "none",
                        }}>
                            Retour
                </Link>
            </Box>
          
                <TextField 
                    value={bookName}
                    onChange={(e) => {
                        setBookName(e.target.value);
                      }}
                    id="outlined-basic" 
                    label="Name" 
                    variant="outlined" />
                <TextField 
                    value={bookYear}
                    onChange={(e) => {
                        setBookYear(e.target.value);
                      }}
                    id="outlined-basic" 
                    label="Publication year" 
                    variant="outlined" />
                <TextField 
                    value={bookCategory}
                    onChange={(e) => {
                        setBookCategory(e.target.value);
                      }}
                    id="outlined-basic" 
                    label="Category" 
                    variant="outlined" />
                <CustomButton 
                    text="SAVE" 
                    onClick={() => addBook(bookName, bookYear, bookCategory)}>
                </CustomButton>
        </Container>
    );      
}