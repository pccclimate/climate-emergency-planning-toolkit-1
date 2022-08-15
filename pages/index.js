import Layout from "../Components/Layout";
import {Box, Container, Typography} from "@mui/material";
import allBuildings from '../assets/all-developments.svg'
import residential from '../assets/residential.svg'
import commercial from '../assets/commercial.svg'
import SVG from "react-inlinesvg";
import Link from 'next/link'

const links = [
    {
        title: 'Adaption Measures for All Buildings',
        text: 'Guidance for all extensions & new development',
        img: allBuildings,
        link: './all_buildings'
    },
    {
        title: 'Residential Buildings',
        text: 'Guidance for extensions & new residential development',
        img: residential,
        link: './residential_buildings'
    },
    {
        title: 'Commercial Buildings',
        text: 'Guidance for, extensions & new commercial development',
        img: commercial,
        link: './commercial_buildings'
    }
]

const Style = {
    p: 5,
    flex: 1,
    '.clippedArea': {
        transition: '0.4s',
        transformOrigin: 'center'
    },
    ':hover': {
        cursor: 'pointer',
        '.clippedArea': {
            transform: 'scale(1.1)'
        }
    }
}

export default function Home() {
  return (
    <Layout>
        <Container>
            <Box sx={{ px: 2, py: 8 }}>
                <Typography textAlign='center' mb={2}>
                    This toolkit has been developed for applicants to understand what is required to ensure new development meets the expectations of the Plymouth and South West Devon Climate Emergency Planning Statement (adopted September 2022).
                </Typography>
                <Typography textAlign='center'mb={2}>
                    The requirements set out are in addition to the policies in the Plymouth and South West Devon Joint Local Plan (JLP), such as policy DEV32 Delivering local carbon development, and the guidance in the Supplementary Planning Document (SPD).
                </Typography>
                <Typography textAlign='center'>
                    To view the requirements, please click on the images below for the relevant development type.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {links.map(({title, text, img, link}) => (
                    <Link href={link} key={title}>
                        <Box sx={Style}>
                            <Typography sx={{ mb: 4, textAlign: 'center' }} variant={'h5'}>{title}</Typography>
                            <Box sx={{ width: '100%', m: 'auto'}}>
                                <SVG
                                    src={img.src}
                                    title={title}
                                    height={'310px'}
                                />
                            </Box>
                            <Typography sx={{ mt: 4, textAlign: 'center' }}>{text}</Typography>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Container>
    </Layout>
  )
}
