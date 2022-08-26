import Nav1 from '../assets/navigation-01.svg'
import Nav2 from '../assets/navigation-02.svg'
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import {Box, Typography, useMediaQuery} from "@mui/material";

export const Header = () => {
    const matches = useMediaQuery('(max-width:900px)');
    return (
    <header>
        <div style={{ width: '100%', maxWidth: 1600, margin: '0 auto', cursor: 'pointer'}}>
            <Link href={'/'}>
                {matches ? (
                    <Typography variant={'h3'} component={'h1'} sx={{ textAlign: 'center', p: 2, color: 'rgb(23, 59, 102)', fontWeight: 'bold'}}> Climate Emergency Planning Tool</Typography>
                    ):
                    (
                    <Box sx={{width: '100%'}}>
                        <Box sx={{minWidth: 800, width: '100%'}}>
                            <SVG
                                src={Nav1.src}
                                height={'100%'}
                                width={'100%'}
                            />
                        </Box>
                    </Box>
                    )
                }
            </Link>
        </div>
        <div style={{ width: '100%', height: 60 }}>
                <SVG
                    src={Nav2.src}
                    width={'100%'}
                    height={'100%'}
                />
        </div>
    </header>
    )
}