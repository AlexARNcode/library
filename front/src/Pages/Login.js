import { Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import CustomButton from "../Components/CustomButton";

export default function Login() {
    return (
        <Container align="center">
            <Typography variant="h2" sx={{ mb: 4 }}>Login</Typography>
            <Box>
                <TextField id="filled-basic" label="username" variant="outlined" />
            </Box>
            <Box sx={{ mb:2 }}>
                <TextField id="filled-basic" label="password" variant="outlined" />
            </Box> 
            <CustomButton text="LOGIN"></CustomButton>
        </Container>  
    )
}