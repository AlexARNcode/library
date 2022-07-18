import { Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import isValidEmail from "../helper/emails";

const axios = require('axios').default;

export default function Register() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const [userCreatedMessage, setUserCreatedMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function handleFormSubmit(e) {
        setEmailErrorMessage("")
        setPasswordErrorMessage("")
        setUserCreatedMessage("")
        setErrorMessage("")

        if (!isValidEmail(userEmail)) {
            setEmailErrorMessage("Invalid email address ! Your email shoud look like example@domain.com")
            throw new Error('Invalid email address !')
        }

        if (!userPassword) {
            setPasswordErrorMessage("Invalid password !")
            throw new Error('Invalid password') 
        }

        axios.post('http://localhost:8080/users', {
            email: userEmail,
            password: userPassword
        })
        .then(function (response) {
            setUserCreatedMessage(response.data)
        })
        .catch(function (error) {
            setErrorMessage(error.response.data)
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
                type="password"
                value={userPassword}
                onChange={(e) => {
                    setUserPassword(e.target.value)
                }}
            />
        </Box> 
        <CustomButton 
            text="REGISTER"
            onClick={(e) => {
                handleFormSubmit(e)
            }}
            >
            </CustomButton>

            {emailErrorMessage && (
                <Typography sx={{ color: "red", mt: 2 }}>
                    {emailErrorMessage}
                </Typography>
            )}

            {passwordErrorMessage && (
                <Typography sx={{ color: "red", mt: 2 }}>
                    {passwordErrorMessage}
                </Typography>
            )}

            {userCreatedMessage && (
                <Typography sx={{ color: "green", mt: 2 }}>
                    {userCreatedMessage}
                </Typography>
            )}

            {errorMessage && (
                <Typography sx={{ color: "red", mt: 2 }}>
                    {errorMessage}
                </Typography>
            )}
 
    </Container> 
    )
}