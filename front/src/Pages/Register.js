import { Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import isValidEmail from "../helper/emails";

const axios = require('axios').default;

export default function Register() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleFormSubmit(e) {
        if (!isValidEmail(userEmail)) {
            alert('Invalid email address !')
            throw new Error('Invalid email addres !')
        }

        axios.post('http://localhost:8080/users', {
            email: userEmail,
            password: userPassword
        })
        .then(function (response) {
            alert(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

        });
       
    }

    return (
    <Container align="center">
        <Typography variant="h2" sx={{ mb: 4 }}>Register</Typography>
        <Box>
            <TextField 
                id="filled-basic" 
                label="email" 
                variant="outlined"
                value={userEmail} 
                onChange={(e) => {
                    setUserEmail(e.target.value)
                }}
            />
        </Box>
        <Box sx={{ mb:2 }}>
            <TextField 
                id="filled-basic" 
                label="password" 
                variant="outlined" 
                value={userPassword}
                onChange={(e) => {
                    setUserPassword(e.target.value)
                }}
            />
        </Box> 
        <CustomButton 
            text="LOGIN"
            onClick={(e) => {
                handleFormSubmit(e)
            }}
            >
            </CustomButton>
    </Container> 
    )
}