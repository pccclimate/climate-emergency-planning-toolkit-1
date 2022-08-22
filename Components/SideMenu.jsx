import {Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import Link from 'next/link'
import {useRouter} from "next/router";
import {AnimatePresence, motion} from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useContext, useState} from "react";
import {SelectedContext} from "../context/selectedElementContext";
import {residentialRefs} from "../data/residentialRefs";
import {allBuildingsRefs} from "../data/allBuildingsRefs";
import {commercialRef} from "../data/commercialRef";
import {Glossary} from "./buildingPages";

const variants = {
    hidden: { opacity: 0, y: 0, x: -100 },
    enter: { opacity: 1, y: 0, x: 0},
    exit: { opacity: 0, y: 0, x: -100 },
}


const homeLinks = [
    {
        title: 'Residential Building',
        link: './residential_buildings'
    },
    {
        title: 'Commercial Building',
        link: './commercial_buildings'
    },
    {
        title: 'Adaptations Space',
        link: './all_buildings'
    }
]

const residential = [
    {
        title: 'Extensions',
        links: [
            {
                title: 'Renewable Energy',
                ref: residentialRefs.renewableEnergy
            },
            {
                title: 'Energy Storage',
                ref: residentialRefs.energyStorage
            },
            {
                title: 'Building Materials',
                ref: residentialRefs.buildingMaterial
            },
            {
                title: 'Electric Vehicles',
                ref: residentialRefs.electricVehicles
            }
        ]
    },
    {
        title: 'New Builds',
        links: [
            {
                title: 'Renewable Energy',
                ref: residentialRefs.renewableEnergy
            },
            {
                title: 'Energy Storage',
                ref: residentialRefs.energyStorage
            },
            {
                title: 'Heating Systems',
                ref: residentialRefs.heatingSystems
            },
            {
                title: 'Building Materials',
                ref: residentialRefs.buildingMaterial
            },
            {
                title: 'Demolition & Rebuild',
                ref: residentialRefs.demolition
            },
            {
                title: 'Electric Vehicles',
                ref: residentialRefs.electricVehicles
            },
            {
                title: 'Active & Sustainable Travel',
                ref: residentialRefs.activeTravel
            }
        ]
    },
]

const allBuildings = [
    {
     links: [
         {
             title: 'Passive Solar Design',
             ref: allBuildingsRefs.solar
         },
         {
             title: 'Soil Resource',
             ref: allBuildingsRefs.soil
         },
         {
             title: 'Tree Cover',
             ref: allBuildingsRefs.tree
         },
         {
             title: 'Green Spaces ',
             ref: allBuildingsRefs.green
         },
         {
             title: 'Water Management & Urban Creep ',
             ref: allBuildingsRefs.water
         },
         {
             title: 'Biodiversity & Habitat',
             ref: allBuildingsRefs.biodiversity
         }
     ]
    }
]

const commercialBuildings = [
    {
        title: 'Extensions',
        links: [
            {
                title: 'Renewable Energy',
                ref: commercialRef.renewableEnergy
            },
            {
                title: 'Energy Storage',
                ref: commercialRef.energyStorage
            },
            {
                title: 'Building Materials',
                ref: commercialRef.buildingMaterial
            },
            {
                title: 'Electric Vehicles',
                ref: commercialRef.electricVehicles
            }
        ]
    },
    {
        title: 'New Builds',
        links: [
            {
                title: 'Renewable Energy',
                ref: commercialRef.renewableEnergy
            },
            {
                title: 'Energy Storage',
                ref: commercialRef.energyStorage
            },
            {
                title: 'Heating Systems',
                ref: commercialRef.heatingSystems
            },
            {
                title: 'Building Materials',
                ref: commercialRef.buildingMaterial
            },
            {
                title: 'Demolition & Rebuild',
                ref: commercialRef.demolition
            },
            {
                title: 'Electric Vehicles',
                ref: commercialRef.electricVehicles
            },
            {
                title: 'Active & Sustainable Travel',
                ref: commercialRef.activeTravel
            }
        ]
    }
]

const HomeLinksComponent = ({setTopMenu}) => {
    const {pathname} = useRouter()

    return (
        <MenuList>
            {homeLinks.map(({title, link}) => (
                <Link key={link} href={link}>
                    <MenuItem onClick={() => setTopMenu(false)} selected={`.${pathname}` === link}>
                        <ListItemText>{title}</ListItemText>
                    </MenuItem>
                </Link>
            ))}
        </MenuList>
    )
}

const nav = {
    '/all_buildings': allBuildings,
    '/residential_buildings': residential,
    '/commercial_buildings': commercialBuildings,
}

const DrillDownMenu = ({setTopMenu}) => {
    const { selected, setSelected } = useContext(SelectedContext)
    const {pathname} = useRouter()
    const navigation = nav[pathname]

    const handleTopMenu = () => {
        setTopMenu(true)
        setSelected(undefined)
    }

    return (
        <>
            <Divider />
            <MenuItem sx={{ py: 2 }} onClick={handleTopMenu}>
                <ListItemIcon>
                    <ArrowBackIosNewIcon />
                </ListItemIcon>
                Building Options
            </MenuItem>
        <MenuList sx={{py: 0}}>
            <Divider />
            {navigation.map(({title, links}, i) => (
                <Box key={i}>
                    <Box sx={{ pb: 2 }}>
                        {title && <Typography sx={{fontWeight: 'bold', pl: 2, pt: 2, pb: 1}}>{title}</Typography>}
                        {links.map(({title, ref}, i) => (
                            <MenuItem key={i} onClick={() => setSelected(ref)} sx={{ pl: title ? 4 : 2 }} selected={ref === selected}>
                                <ListItemText>{title}</ListItemText>
                            </MenuItem>
                        ))}
                    </Box>
                <Divider />
            </Box>
            ))}
            <MenuItem selected={selected === Glossary}>
                <ListItemText onClick={() => setSelected(Glossary)}>Glossary</ListItemText>
            </MenuItem>
        </MenuList>
            <Divider />
        </>
    )
}
export const SideMenu = () => {
    const [topMenu, setTopMenu] = useState(false)

    return (
        <AnimatePresence >
            <motion.div
                layoutId={'sideBar'}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'ease-in-out', duration: 0.9 }}
            >
        <Paper>
            <Box sx={{ width: 300, minHeight: 'calc(100vh - 170px)' }}>
                <Box sx={{ position: 'fixed', width: 300 }}>
                    {topMenu ? <HomeLinksComponent setTopMenu={setTopMenu} /> : <DrillDownMenu setTopMenu={setTopMenu} />}
                </Box>
            </Box>
        </Paper>
            </motion.div>
        </AnimatePresence>
    )
}