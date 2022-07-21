import { Box, Button, TextField } from "@mui/material";
import { CancelOutlined, SaveOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
import { EntriesContext } from "../../../context/entries";
import { UIContext } from "../../../context/ui";

function NewEntry() {

    const [inputValue, setinputValue] = useState("");
    const [isTouched, setisTouched] = useState(false);

    const { addEntry } = useContext(EntriesContext)
    const {isAdding, setIsAdd} = useContext(UIContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value);
        setisTouched(true);
    }

    const onSubmit = () => {
        if (inputValue.trim().length > 0) {
            addEntry(inputValue);
            setIsAdd(false);
            setinputValue("");
            setisTouched(false);
        }
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>

            {!isAdding ? (

                <Button
                    startIcon={<AddCircleOutlineOutlined />}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAdd(true)}
                >
                    Add new entry
                </Button>
            ) : (

                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder="Add a new entry"
                        autoFocus
                        multiline
                        label="New Entry"
                        helperText="Add a new entry"
                        error={inputValue.length <= 0 && isTouched}
                        onBlur={() => setisTouched(true)}
                        value={inputValue}
                        onChange={handleChange}
                    />

                    <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}

                    >

                        <Button
                            onClick={onSubmit}
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
                            onClick={() => setIsAdd(false)}
                        >
                            Cancel
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default NewEntry;