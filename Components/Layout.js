import {Header} from "./Header";
import Head from "next/head";
import {Box} from "@mui/material";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Climate Emergency Planning Toolkit</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <meta name="description" content="This toolkit has been developed for applicants to understand what is required to ensure new development meets the expectations of the Plymouth and South West Devon Climate Emergency Planning Statement (adopted September 2022)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet"/>
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <Header />
                <Box component={'main'} sx={{ height: '100%'}}>{children}</Box>
            </Box>
        </>
    )
}