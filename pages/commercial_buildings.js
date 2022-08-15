import { Box} from "@mui/material";
import Layout from "../Components/Layout";
import {SideMenu} from "../Components/SideMenu";
import {BuildingPages} from "../Components/buildingPages";
import {ResidentialSVG} from "../Components/residentialSVG";

export default function Page() {
    return (
        <Layout>
            <Box sx={{ display: 'flex', alignItems: 'stretch', height: '100%'}}>
                <SideMenu />
                <BuildingPages svg={ResidentialSVG} title={'Guidance for Commercial Buildings'}/>
            </Box>
        </Layout>
    )
}