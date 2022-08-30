import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {InfoLinks} from "./infoLinks";
import {useContext, useEffect, useState} from "react";
import {SelectedContext} from "../context/selectedElementContext";

export const Info = ({item}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const { selected } = useContext(SelectedContext)

    useEffect(() => {
        setAccordionOpen(false)
    }, [selected])

    return (
        <Box p={2}>
            <Accordion expanded={accordionOpen} onChange={() => setAccordionOpen(!accordionOpen)}>
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