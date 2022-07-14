import { useContext } from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxOutlined from "@mui/icons-material/InboxOutlined";
import { UIContext } from "../../../context/ui";
const menuItems = [
    "Inbox",
    "Starred",
    "Sent Mail",
    "Drafts",
]

function SideBar() {

    const { isSideBarOpen, closeSideBar } = useContext(UIContext)


    return (
        <Drawer
            
            anchor="left"
            open={isSideBarOpen}
            onClose={() => closeSideBar()}
            transitionDuration={500}
        >
            <Box sx={{ width: "250px" }}>

                <Box sx={{ padding: "5px 10px" }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>


                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={item}>
                            <ListItemIcon>

                                {<InboxOutlined />}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>

                <Divider />


            </Box>
        </Drawer>
    );
}

export default SideBar;