import { Box, Button, TextField } from "@mui/material";
import { CancelOutlined, SaveOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";

function NewEntry() {
    return (
        <Box sx={{marginBottom:2, paddingX:1}}>

            <Button
                startIcon={<AddCircleOutlineOutlined />}
                fullWidth
                variant="outlined"
            >
                Add new entry
            </Button>

            <TextField
                fullWidth
                sx={{marginTop:2, marginBottom:1}}
                placeholder="Add a new entry"
                autoFocus
                multiline
                label="New Entry"
                helperText="Add a new entry"
            />

            <Box 
                sx={{display: "flex", justifyContent: "space-between"}}
            
            >

                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<SaveOutlined />}
                >
                    Save
                </Button>

                <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<CancelOutlined />}
                >
                    Cancel
                </Button>
            </Box>
        </Box>
    );
}

export default NewEntry;