import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {InfoLinks} from "./infoLinks";

export const Info = ({item}) => {
    return (
        <Box p={2}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="info"
                    id="info"
                >
                    <Typography sx={{fontWeight: 'bold '}}>Further Information and Links</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.further.map((props, i) => <InfoLinks {...props} key={i}/>)}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}