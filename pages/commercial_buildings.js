import { Box} from "@mui/material";
import Layout from "../Components/Layout";
import {SideMenu} from "../Components/SideMenu";
import {BuildingPages} from "../Components/buildingPages";
import {CommercialSVG} from "../Components/commercialSVG";

export default function Page() {
    return (
        <Layout>
            <Box sx={{ display: 'flex'}}>
                <SideMenu />
                <BuildingPages svg={CommercialSVG} title={'Guidance for Commercial Buildings'}/>
            </Box>
        </Layout>
    )
}