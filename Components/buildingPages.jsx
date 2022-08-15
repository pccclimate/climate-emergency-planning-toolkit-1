import {Box, Container, Typography} from "@mui/material";
import {useContext} from "react";
import {SelectedContext} from "../context/selectedElementContext";
import residentialData from '../data/residential.json'
import {AnimatePresence, motion} from "framer-motion";
import {TitleSections} from "./titleSections";
import {Require} from "./require";
import {Info} from "./info";

const transition = { ease: "linear", duration: 1, opacity: {delay: 0.5}}

export const BuildingPages = ({svg, title}) => {
    const { selected } = useContext(SelectedContext)
    const selectedData = residentialData[selected]

    return (
        <Container maxWidth={'xl'} sx={{ py: 5}}>
            <AnimatePresence  initial={false}>
                {!selectedData && (
                    <motion.div
                        layout
                        key='header'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, height: 120 }}
                        transition={{ ease: "easeIn", duration: 1, opacity: { duration: 0.5  }}}
                        exit={{opacity: 0, height: 0 }}
                    >
                        <Typography variant={'h2'} sx={{textAlign: 'center'}}>
                            {title}
                        </Typography>
                </motion.div>)}
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
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
                    <motion.div
                        key='svg'
                        layout
                        initial={{flex: 1, maxWidth: 1100, padding: 15 }}
                        animate={{ flex: 4, maxWidth: 1100, padding: 15 }}
                        transition={{ ease: "linear", duration: 1, delay: 0.5 }}
                    >
                        {svg()}
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


