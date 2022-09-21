import {
    Box,
    Divider, Drawer,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Typography,
    useMediaQuery
} from "@mui/material";
import Link from 'next/link'
import {useRouter} from "next/router";
import {AnimatePresence, motion} from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useContext, useEffect, useState} from "react";
import {SelectedContext} from "../context/selectedElementContext";
import {residentialRefs} from "../data/residentialRefs";
import {allBuildingsRefs} from "../data/allBuildingsRefs";
import {commercialRef} from "../data/commercialRef";
import {Glossary} from "./buildingPages";
import MenuIcon from '@mui/icons-material/Menu';

const variants = {
    hidden: { opacity: 0, y: 0, x: -100 },
    enter: { opacity: 1, y: 0, x: 0},
    exit: { opacity: 0, y: 0, x: -100 },
}


const homeLinks = [
    {
        title: 'All Development & New Buildings',
        link: './all_buildings'
    },
    {
        title: 'Commercial Building',
        link: './commercial_buildings'
    },
    {
        title: 'Residential Building',
        link: './residential_buildings'
    }
]

const residential = [
    {
        title: 'Extensions',
        links: [
            {
                title: 'Renewable energy (M1)',
                ref: residentialRefs.renewableEnergy
            },
            {
                title: 'Energy storage (M2)',
                ref: residentialRefs.energyStorage
            },
            {
                title: 'Building materials (M4)',
                ref: residentialRefs.buildingMaterial
            },
            {
                title: 'Electric vehicles (M6)',
                ref: residentialRefs.electricVehicles
            },
        ]
    },
    {
        title: 'New Builds',
        links: [
            {
                title: 'Renewable energy (M1)',
                ref: residentialRefs.renewableEnergy
            },
            {
                title: 'Energy storage (M2)',
                ref: residentialRefs.energyStorage
            },
            {
                title: 'Heating systems (M3)',
                ref: residentialRefs.heatingSystems
            },
            {
                title: 'Building materials (M4)',
                ref: residentialRefs.buildingMaterial
            },
            {
                title: 'Demolition and rebuild (M5)',
                ref: residentialRefs.demolition
            },
            {
                title: 'Electric vehicles (M6)',
                ref: residentialRefs.electricVehicles
            },
            {
                title: 'Active and sustainable travel (M7)',
                ref: residentialRefs.activeTravel
            }
        ]
    },
]

const allBuildings = [
    {
     links: [
         {
             title: 'Passive solar design (A1)',
             ref: allBuildingsRefs.solar
         },
         {
             title: 'Soil resource (A2)',
             ref: allBuildingsRefs.soil
         },
         {
             title: 'Tree cover (A3)',
             ref: allBuildingsRefs.tree
         },
         {
             title: 'Green spaces (A4)',
             ref: allBuildingsRefs.green
         },
         {
             title: 'Water management and urban creep (A5)',
             ref: allBuildingsRefs.water
         },
         {
             title: 'Biodiversity and habitat (A6)',
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
                title: 'Renewable energy (M1)',
                ref: commercialRef.renewableEnergy
            },
            {
                title: 'Energy storage (M2)',
                ref: commercialRef.energyStorage
            },
            {
                title: 'Building materials (M4)',
                ref: commercialRef.buildingMaterial
            },
            {
                title: 'Electric vehicles (M6)',
                ref: commercialRef.electricVehicles
            }
        ]
    },
    {
        title: 'New Builds',
        links: [
            {
                title: 'Renewable energy (M1)',
                ref: commercialRef.renewableEnergy
            },
            {
                title: 'Energy storage (M2)',
                ref: commercialRef.energyStorage
            },
            {
                title: 'Heating systems (M3)',
                ref: commercialRef.heatingSystems
            },
            {
                title: 'Building materials (M4)',
                ref: commercialRef.buildingMaterial
            },
            {
                title: 'Demolition and rebuild (M5)',
                ref: commercialRef.demolition
            },
            {
                title: 'Electric vehicles (M6)',
                ref: commercialRef.electricVehicles
            },
            {
                title: 'Active and sustainable travel (M7)',
                ref: commercialRef.activeTravel
            },
        ]
    }
]

const HomeLinksComponent = ({setTopMenu}) => {
    const {pathname} = useRouter()

    return (
        <MenuList>
            {homeLinks.map(({title, link}) => (
                <Link key={link} href={link}>
                    <MenuItem onClick={() => setTopMenu(false)} selected={`.${pathname}` === link} style={{whiteSpace: 'normal'}}>
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
                            <MenuItem key={i} onClick={() => setSelected(ref)} sx={{ pl: title ? 4 : 2 }} selected={ref === selected} style={{whiteSpace: 'normal'}}>
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
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { selected } = useContext(SelectedContext)
    const matches = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        setDrawerOpen(false)
    }, [selected])

    if(matches) {
        return (
            <div>
                <Box sx={{ position: 'absolute', background: 'rgb(23, 59, 102)', borderRadius: '50%', p: 1, m: 1, color: 'white', cursor: 'pointer', mt: 1 }} onClick ={() => setDrawerOpen(!drawerOpen)}>
                    <MenuIcon sx={{ width: 30 }} />
                </Box>
                <Drawer
                    anchor={'left'}
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <MenuSideBar />
                </Drawer>
            </div>
        )
    }

    return (
        <div>
            <Paper style={{ height: '100%'}}>
                <MenuSideBar />
            </Paper>
        </div>
    )
}

const MenuSideBar = () => {
    const [topMenu, setTopMenu] = useState(false)
    return (
        <Box sx={{ width: 250, minHeight: 'calc(100vh - 170px)' }}>
            <Box sx={{ width: 250 }}>
                {topMenu ? <HomeLinksComponent setTopMenu={setTopMenu} /> : <DrillDownMenu setTopMenu={setTopMenu} />}
            </Box>
        </Box>
    )
}