import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useContext } from "react";
import { UIContext } from "../../../context/ui";
import Link from "next/link";
import { Link as MaterialLink } from "@mui/material";

function NavBar() {


    const { openSideBar } = useContext(UIContext)

    return (

        <AppBar position="sticky">
            <Toolbar>
                <IconButton size="large" edge="start" onClick={() => openSideBar()}>
                    <MenuRoundedIcon />
                </IconButton>

                <Link href={`/`} passHref>
                    <MaterialLink underline="none" color="white">
                        <Typography variant="h6">OpenJira</Typography>
                    </MaterialLink>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;