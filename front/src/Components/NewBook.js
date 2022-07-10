import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { TextField, Box, Typography } from "@mui/material";
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
                        variant="outlined" />
                </Box>
                <Box>
                    <TextField 
                            value={bookYear}
                            onChange={(e) => {
                                setBookYear(e.target.value);
                            }}
                            id="outlined-basic" 
                            label="Publication year" 
                            variant="outlined" />
                </Box>
                <Box>
                <TextField 
                        value={bookCategory}
                        onChange={(e) => {
                            setBookCategory(e.target.value);
                        }}
                        id="outlined-basic" 
                        label="Category" 
                        variant="outlined" />
                </Box>
                    
                    <CustomButton 
                        text="SAVE" 
                        sx={{ mt: 3 }}
                        onClick={() => addBook(bookName, bookYear, bookCategory)}>
                    </CustomButton>
           
                
        </Container>
    );      
}