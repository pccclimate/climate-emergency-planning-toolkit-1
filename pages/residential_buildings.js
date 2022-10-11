import { Box} from "@mui/material";
import Layout from "../Components/Layout";
import {SideMenu} from "../Components/SideMenu";
import {BuildingPages} from "../Components/buildingPages";
import {ResidentialSVG} from "../Components/residentialSVG";

export default function Page() {
    return (
        <Layout>
            <Box sx={{ display: 'flex'}}>
                <SideMenu />
                <BuildingPages svg={ResidentialSVG} title={'Mitigation measures for residential development'}/>
            </Box>
        </Layout>
    )
}