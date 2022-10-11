import {Typography, Box} from "@mui/material";
import {InnerExpansion} from "./innerExpansion";

export const Require = ({item}) => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography sx={{fontWeight: 'bold', pb: 2}}>What We Require</Typography>
            {item.require.map((text, i) => (
                <Typography key={text} sx={{pb: 1}}>
                    {text}
                </Typography>
            ))}
            {item.requireExpansions?.map((props, i) => <InnerExpansion {...props} key={props.text}/>)}
        </Box>
    )
}