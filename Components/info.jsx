import { Box, Typography } from "@mui/material";
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
            <Typography sx={{fontWeight: 'bold', pb: 2}}>Further Information and Links</Typography>
            {item.further.map((props, i) => <InfoLinks {...props} key={i}/>)}
        </Box>
    )
}