import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header () {
    const token = localStorage.getItem("token");

    return (
        <Container sx={{ mb: 5 }}>
            <Typography align="center" variant="h1">
                Library
            </Typography>
            {token && (
                <Typography>
                    Vous êtes connecté
                </Typography>
            )}

            {!token && (
                <Typography>
                    <Link to="/login">Se connecter</Link>
                </Typography>
            )}
           
        </Container>
    )
}

