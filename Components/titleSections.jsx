import {Typography, Box} from "@mui/material";

export const TitleSections = ({item}) => {
    return (
        <Box p={2}>
            <Typography sx={{fontWeight: 'bold', pb: 2}}>{item.title}</Typography>
            {item.introSummary && <Typography sx={{fontStyle: 'italic ', pb: 1}}>{item.introSummary}</Typography>}
            {item.introText.map((text, i) => (
                <Typography key={i} sx={{mb: 2}}>{text}</Typography>
            ))}

        </Box>
    )
}