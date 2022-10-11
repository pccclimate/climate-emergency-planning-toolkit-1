import { Box, Typography} from "@mui/material";

export const InnerExpansion = ({title, text}) => {
    return (
        <Box sx={{my: 3}}>
            <Typography sx={{fontWeight: 'bold', pb: 2}}>{title}</Typography>
            <Typography sx={{pb: 1}}>
                {text}
            </Typography>
        </Box>
    )
}