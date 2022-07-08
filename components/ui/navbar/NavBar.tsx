import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useContext } from "react";
import { UIContext } from "../../../context/ui";

function NavBar() {


    const {setIsSideBarOpen} = useContext(UIContext)

    return (

        <AppBar position="sticky">
            <Toolbar>
                <IconButton size="large" edge="start" onClick={()=> setIsSideBarOpen({type:"OPEN_DRAWER"})}>
                    <MenuRoundedIcon />
                </IconButton>

                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;