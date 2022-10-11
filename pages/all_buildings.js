import { Box} from "@mui/material";
import Layout from "../Components/Layout";
import {SideMenu} from "../Components/SideMenu";
import {BuildingPages} from "../Components/buildingPages";
import {AllSVG} from "../Components/allSVG";

export default function Page() {
    return (
        <Layout>
            <Box sx={{ display: 'flex'}}>
                <SideMenu />
                <BuildingPages svg={AllSVG} title={'Adaption measures for all development'}/>
            </Box>
        </Layout>
    )
}