import {Accordion, AccordionDetails, AccordionSummary, Typography, Box} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {InnerExpansion} from "./innerExpansion";
import {useContext, useEffect, useState} from "react";
import {SelectedContext} from "../context/selectedElementContext";

export const Require = ({item}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const { selected } = useContext(SelectedContext)

    useEffect(() => {
        setAccordionOpen(false)
    }, [selected])
    return (
        <Box sx={{ p: 2 }}>
            <Accordion expanded={accordionOpen} onChange={() => setAccordionOpen(!accordionOpen)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="require"
                    id="require"
                >
                    <Typography sx={{fontWeight: 'bold '}}>What We Require</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.require.map((text, i) => (
                        <Typography key={text} sx={{pb: 1}}>
                            {text}
                        </Typography>
                    ))}
                    {item.requireExpansions?.map((props, i) => <InnerExpansion {...props} key={props.text}/>)}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}