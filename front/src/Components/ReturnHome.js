import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ReturnHome() {
    return (
        <Box sx={{ mb: 3 }}>
            <Link to="/" style={{ 
                    fontFamily: "Roboto", 
                    textDecoration: "none",
                    }}>
                        Retour
            </Link>
    </Box>
    )

}