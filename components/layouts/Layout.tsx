import { Title } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Head from "next/head";
import NavBar from "../ui/navbar/NavBar";
import SideBar from "../ui/sidebar/SideBar";

interface Props {
    children: React.ReactNode;
    title?: string;
}

function Layout({children, title = "OpenJira"}: Props) {
    return ( 
        <Box sx={{flexFlow: 1}}>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar/>
            <SideBar/>
            <Box sx={{padding:"10px 20px"}}>
                {children}
            </Box>
        </Box>
     );
}

export default Layout;