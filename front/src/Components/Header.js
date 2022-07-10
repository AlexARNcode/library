import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Header () {
    return (
        <Container sx={{ mb: 5 }}>
            <Typography align="center" variant="h1">
                Library
            </Typography>
        </Container>
    )
}

