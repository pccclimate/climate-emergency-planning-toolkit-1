import {Accordion, AccordionDetails, AccordionSummary, Typography, Box} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {InnerExpansion} from "./innerExpansion";

export const Require = ({item}) => {
    return (
        <Box sx={{ p: 2 }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="require"
                    id="require"
                >
                    <Typography sx={{fontWeight: 'bold '}}>What we Require</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.require.map((text, i) => (
                        <Typography key={i} sx={{pb: 1}}>
                            {text}
                        </Typography>
                    ))}
                    {item.requireExpansions?.map((props, i) => <InnerExpansion {...props} key={i}/>)}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}