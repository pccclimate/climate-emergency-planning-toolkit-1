import { Box} from "@mui/material";
import Layout from "../Components/Layout";
import {SideMenu} from "../Components/SideMenu";
import {BuildingPages} from "../Components/buildingPages";
import {AllSVG} from "../Components/allSVG";

export default function Page() {
    return (
        <Layout>
            <Box sx={{ display: 'flex', alignItems: 'stretch', height: '100%'}}>
                <SideMenu />
                <BuildingPages svg={AllSVG} title={'Adaptation Measures for All Extensions and New Development'}/>
            </Box>
        </Layout>
    )
}