import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const InnerExpansion = ({title, text}) => {
    return (
        <Box sx={{my: 3}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="title"
                    id="title"
                >
                    <Typography sx={{fontWeight: 'bold '}}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{pb: 1}}>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}