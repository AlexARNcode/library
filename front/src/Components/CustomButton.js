import Button from '@mui/material/Button';

const CustomButton = ({text, ...buttonProps}) => {
    
    return (
        <Button variant="contained" {...buttonProps}>
            {text}
        </Button>
    )
}

export default CustomButton;