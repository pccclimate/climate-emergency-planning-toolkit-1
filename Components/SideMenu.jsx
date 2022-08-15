import {Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import Link from 'next/link'
import {useRouter} from "next/router";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useContext, useState} from "react";
import {SelectedContext} from "../context/selectedElementContext";
import {residentialRefs} from "../data/residentialRefs";
import {allBuildingsRefs} from "../data/allBuildingsRefs";

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

const HomeLinksComponent = ({setTopMenu}) => {
    return (
        <MenuList>
            {homeLinks.map(({title, link}) => (
                <Link key={link} href={link}>
                    <MenuItem onClick={() => setTopMenu(false)}>
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
    '/commercial_buildings': residential,
}

const DrillDownMenu = ({setTopMenu}) => {
    const { setSelected } = useContext(SelectedContext)
    const {pathname} = useRouter()
    const navigation = nav[pathname]

    const handleTopMenu = () => {
        setTopMenu(true)
        setSelected(undefined)
    }

    return (
        <>
            <MenuItem sx={{ py: 2 }} onClick={handleTopMenu}>
                <ListItemIcon>
                    <ArrowBackIosNewIcon />
                </ListItemIcon>
                Building Options
            </MenuItem>
        <MenuList>
            <Divider />
            {navigation.map(({title, links}, i) => (
                <Box key={i}>
                    <Box sx={{ pb: 2 }}>
                        {title && <Typography sx={{fontWeight: 'bold', pl: 2, pt: 2, pb: 1}}>{title}</Typography>}
                        {links.map(({title, ref}, i) => (
                            <MenuItem key={i} onClick={() => setSelected(ref)} sx={{ pl: title ? 4 : 2 }}>
                                <ListItemText>{title}</ListItemText>
                            </MenuItem>
                        ))}
                    </Box>
                <Divider />
            </Box>
            ))}
        </MenuList>
        </>
    )
}
export const SideMenu = () => {
    const [topMenu, setTopMenu] = useState(false)

    return (
        <Paper>
            <Box sx={{ width: 300 }}>
                {topMenu ? <HomeLinksComponent setTopMenu={setTopMenu} /> : <DrillDownMenu setTopMenu={setTopMenu} />}
            </Box>
        </Paper>
    )
}