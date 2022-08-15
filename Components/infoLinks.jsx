import {Typography} from "@mui/material";

export const InfoLinks = ({text, link}) => {
    if (link) {
        return (
            <a href={link} target={'_blank'} rel="noreferrer">
                <Typography sx={{pb: 1}}>
                    {text}
                </Typography>
            </a>
        )
    }
    return (
        <Typography sx={{pb: 1}}>
            {text}
        </Typography>
    )
}