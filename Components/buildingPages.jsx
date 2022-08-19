import {Box, Chip, Container, Typography} from "@mui/material";
import {useContext, useEffect} from "react";
import {SelectedContext} from "../context/selectedElementContext";
import residentialData from '../data/residential.json'
import allData from '../data/adaption.json'
import commercial from '../data/commercial.json'
import {AnimatePresence, motion} from "framer-motion";
import {TitleSections} from "./titleSections";
import {Require} from "./require";
import {Info} from "./info";
import {useRouter} from "next/router";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const transition = { ease: "linear", duration: 1, opacity: {delay: 0.5}}


const dataSet = {
    '/all_buildings': allData,
    '/residential_buildings': residentialData,
    '/commercial_buildings': commercial,
}

export const Glossary = 'glossary'


export const BuildingPages = ({svg, title}) => {
    const { selected, setSelected } = useContext(SelectedContext)
    const {pathname} = useRouter()
    const selectedData = dataSet[pathname][selected]

    useEffect(() => {
        setSelected(undefined)
        return (() => {
            setSelected(undefined)
        })
    }, [pathname])

    if(selected === Glossary) {
        return (
            <Container maxWidth={'xl'} sx={{ py: 5 }}>
                <Glossary />
            </Container>
        )
    }

    return (
        <Container maxWidth={'xl'} sx={{ py: 5 }}>
            <AnimatePresence  initial={false}>
                {!selectedData && (
                    <motion.div
                        layout
                        key='header'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, height: 160 }}
                        transition={{ ease: "easeIn", duration: 1, opacity: { duration: 0.5  }}}
                        exit={{opacity: 0, height: 0 }}
                    >
                        <Typography variant={'h2'} sx={{textAlign: 'center'}}>
                            {title}
                        </Typography>
                </motion.div>)}
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                    {selectedData && (
                        <motion.div
                            layout
                            key='title'
                            animate={{ opacity: 1, flex: 2}}
                            exit={{opacity: 0, flex: 1 }}
                            transition={transition}
                            initial={{opacity: 0, flex: 1 }}
                        >
                            <TitleSections item={selectedData}/>
                        </motion.div>
                    )}
                    {!selectedData && (
                        <Box sx={{ position: 'absolute', top: 20, left: '10%', zIndex: 5 }}>
                            <Chip label={'Click on the interactive elements for more information'} color="success" />
                        </Box>
                    )}

                    <motion.div
                        key='svg'
                        layout
                        initial={{flex: 4, maxWidth: 1100}}
                        animate={{ flex: 4, maxWidth: 1100 }}
                        transition={{ ease: "linear", duration: 1}}
                    >
                        <Box sx={{ position: 'relative '}}>
                            {selectedData && (
                                <motion.div
                                    style={{ position: 'absolute', top: -20, left: -20 }}
                                    animate={{ opacity: 1 }}
                                    exit={{opacity: 0 }}
                                    initial={{opacity: 0 }}
                                    transition={transition}
                                >
                                    <ArrowCircleLeftIcon onClick={() => {setSelected(undefined)}} sx={{
                                        cursor: 'pointer', fontSize: 80, color: 'rgb(154, 194, 28)', stroke: 'white', strokeWidth: 0.3, transition: '0.4s', '&:hover': {color: 'rgb(35, 53, 105)'} }} />
                                </motion.div>
                            )}
                            <Box>
                                {svg()}
                            </Box>
                        </Box>
                        {selectedData && (
                            <motion.div
                                key='info'
                                animate={{ opacity: 1 }}
                                exit={{opacity: 0 }}
                                transition={transition}
                                initial={{opacity: 0 }}
                            >
                                <Require item={selectedData} />
                            </motion.div>
                        )}
                    </motion.div>
                    {selectedData && (
                        <motion.div
                            layout
                            key='info'
                            animate={{ opacity: 1, flex: 2  }}
                            exit={{opacity: 0, flex: 1 }}
                            transition={transition}
                            initial={{opacity: 0, flex: 1 }}
                        >
                            <Info item={selectedData} />
                        </motion.div>
                    )}
                </Box>
            </AnimatePresence>
        </Container>
    )
}


