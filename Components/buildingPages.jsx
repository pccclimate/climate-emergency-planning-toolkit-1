import {Box, Chip, Container, Typography, useMediaQuery} from "@mui/material";
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
import {GlossaryPage} from "./Glossary";

const transition = { ease: "linear", duration: 1, delay: 0.6 }
const transition2 = { ease: "linear", duration: 1, opacity: {delay: 2}}
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1},
    exit: { opacity: 0 },
}

const dataSet = {
    '/all_buildings': allData,
    '/residential_buildings': residentialData,
    '/commercial_buildings': commercial,
}

export const Glossary = 'glossary'


export const BuildingPages = (props) => {
    const { selected, setSelected } = useContext(SelectedContext)
    const {pathname} = useRouter()

    useEffect(() => {
        setSelected(undefined)
        return (() => {
            setSelected(undefined)
        })
    }, [pathname])

    if(selected === Glossary) {
        return (
            <Container maxWidth={'xl'} sx={{ py: 5 }}>
                <GlossaryPage />
            </Container>
        )
    }

    return (
        <Container maxWidth={'xl'} sx={{ py: 5 }}>
            {selected === Glossary ? <GlossaryPage /> : <MainContent {...props} />}
        </Container>
    )
}


const MainContent = ({title, svg}) => {
    const matches = useMediaQuery('(max-width:1200px)');
    const { selected, setSelected } = useContext(SelectedContext)
    const {pathname} = useRouter()
    const selectedData = dataSet[pathname][selected]
    return (
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'ease-in-out', duration: 0.9, delay: 1 }}
            >
                {!selectedData && (
                    <motion.div
                        layout
                        key='header'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        transition={{ ease: "easeIn", duration: 0.5, delay: 1}}
                        exit={{opacity: 0}}
                    >
                        <Typography variant={'h4'} sx={{textAlign: 'center', mt: 1, zIndex: 10, position: 'relative', mb: 3}}>
                            {title}
                        </Typography>
                    </motion.div>)}
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', flexDirection: matches ? 'column' : 'row'}}>
                    <motion.div
                        layout
                        key='title'
                        animate={{ opacity: 1, flex: selectedData ? 2 : 1 }}
                        transition={transition}
                        initial={{opacity: 0, flex: 1 }}
                    >
                        {selectedData && (
                            <motion.div
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={transition2}
                                initial={{ opacity: 0}}
                            >
                                <TitleSections item={selectedData}/>
                            </motion.div>
                        )}
                    </motion.div>
                    {!selectedData && (
                        <Box sx={{ position: 'absolute', top: 20, left: matches ? 0 : '10%', zIndex: 5, whiteSpace: 'normal', maxWidth: '100%' }}>
                            <Chip label={'Click on the interactive elements for more information'} color="success" size={'small'} />
                        </Box>
                    )}
                    <motion.div
                        key='svg'
                        layout
                        initial={{flex: 2, maxWidth: 1100}}
                        animate={{ flex: 2, maxWidth: 1100 }}
                        transition={{ ease: "linear", duration: 1}}
                    >
                        <Box sx={{ position: 'relative', m: 'auto', maxWidth: 900 }}>
                            {selectedData && (
                                <motion.div
                                    style={{ position: 'absolute', top: -20, left: -20, zIndex: 10 }}
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
                                transition={transition2}
                                initial={{opacity: 0 }}
                            >
                                <Require item={selectedData} />
                            </motion.div>
                        )}
                    </motion.div>
                    <motion.div
                        layout
                        key='info'
                        animate={{ opacity: 1, flex: selectedData ? 2 : 1 }}
                        transition={transition}
                        initial={{opacity: 0, flex: 1 }}
                    >
                        {selectedData && (
                            <motion.div
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={transition2}
                                initial={{ opacity: 0}}
                            >
                                <Info item={selectedData} />
                            </motion.div>
                        )}
                    </motion.div>

                </Box>
            </motion.div>
        </AnimatePresence>
    )
}

