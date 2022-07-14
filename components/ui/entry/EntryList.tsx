import { Box, List } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../../context/entries";
import { EntryStatusType } from "../../../interfaces";
import EntryCard from "./EntryCard";


interface EntryListProps {
    status: EntryStatusType

}

const EntryList: FC<EntryListProps> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const filteredEntries = useMemo(() => entries.filter(entry => entry.status === status), [entries])


    return (
        <div>
            <Box sx={{ height: "calc(100vh-180px)", overflow: "none", backgroundColor: "transparent" }}>
                <List sx={{ opacity: 1 }}>
                    {filteredEntries.map(entry => {

                        return (
                            <EntryCard key={entry.description} entry={entry} />
                        )

                    })}
                </List>
            </Box>
        </div>
    );
}

export default EntryList;