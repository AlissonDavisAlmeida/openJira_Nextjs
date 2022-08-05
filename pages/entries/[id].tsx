import {
    capitalize,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, Radio, RadioGroup, TextField, IconButton
} from "@mui/material";
import Layout from "../../components/layouts/Layout";
import { DeleteOutlined, SaveOutlined } from "@mui/icons-material";
import { EntryStatusType } from "../../interfaces";
import { useContext, useMemo, useState } from "react";
import { GetServerSideProps } from "next";
import { getEntryById } from "../../database/dbEntries";
import { IEntry } from "../../database/mongoose/models";
import { EntriesContext } from "../../context/entries";
import { useRouter } from "next/router";
import { getFormatDistanceToNow } from "../../utils/date_functions";

const validStatus: EntryStatusType[] = ["pending", "in-progress", "done"]

interface EntryCardProps {
    entry: IEntry
}

function EntryPage({ entry }: EntryCardProps) {



    const [inputValue, setinputValue] = useState(entry.description);
    const [status, setstatus] = useState<EntryStatusType>(entry.status);
    const [touched, settouched] = useState(false);

    const { updateEntry } = useContext(EntriesContext);

    const navigate = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value);
        settouched(true);
    }

    const onStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstatus(event.target.value as EntryStatusType);
    }

    const onClickButton = () => {

        updateEntry({
            id: entry._id!,
            description: inputValue,
            status: status,
            createdAt: entry.createdAt,
        })

        navigate.push("/")
    }

    const isInvalid = useMemo(() => inputValue.trim().length <= 0 && touched, [inputValue, touched])

    return (
        <Layout title={inputValue.substring(0, 20) + "..."}>
            <Grid
                container
                justifyContent={"center"}
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entry:`}
                            subheader={`Created at last: ${getFormatDistanceToNow(entry.createdAt)}`}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="New Entry"
                                autoFocus
                                multiline
                                label="New Entry"
                                value={inputValue}
                                onChange={handleChange}
                                onBlur={() => settouched(true)}
                                helperText={isInvalid && `Insert a value`}
                                error={isInvalid && touched && true}
                            />

                            <FormControl>
                                <FormLabel>Status: </FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChange}
                                >
                                    {
                                        validStatus.map(option => {
                                            return (
                                                <FormControlLabel
                                                    key={option}
                                                    value={option}
                                                    control={<Radio />}
                                                    label={capitalize(option)}
                                                />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveOutlined />}
                                variant="contained"
                                fullWidth
                                onClick={onClickButton}
                                disabled={isInvalid}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>

            <IconButton sx={{
                position: "fixed",
                bottom: 30,
                right: 30,
                backgroundColor: "red",
            }}>
                <DeleteOutlined />
            </IconButton>
        </Layout>
    );
}





export const getServerSideProps: GetServerSideProps = async (context: any) => {

    const entryId = context.params.id;

    const entry = await getEntryById(entryId);

    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }



    return {
        props: {
            entry: JSON.parse(JSON.stringify(entry))
        }
    }
}

export default EntryPage;