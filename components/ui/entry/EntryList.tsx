import { List, Paper } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../../context/entries";
import { UIContext } from "../../../context/ui";
import { EntryStatusType } from "../../../interfaces";
import EntryCard from "./EntryCard";
import styles from "./entry.module.css"


interface EntryListProps {
    status: EntryStatusType

}

const EntryList: FC<EntryListProps> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, stopDragging } = useContext(UIContext);

    const filteredEntries = useMemo(() => entries.filter(entry => entry.status === status), [entries])


    return (
        <div
            className={isDragging ? styles.dragging : ""}
            onDrop={(e) => {
                const id = e.dataTransfer.getData("text");

                const entryToChange = entries.find(entry => entry.id === id);

                if (entryToChange) {
                    entryToChange.status = status;
                    updateEntry(entryToChange);
                }
                stopDragging()

            }}
            onDragOver={(e) => {
                e.preventDefault();
            }}

        >
            <Paper
                sx={{
                    height: "calc(100vh - 64px)",
                    overflow: "none",
                    backgroundColor: "transparent"
                }}

            >
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "ease-in-out .5s" }}>
                    {filteredEntries.map(entry => {

                        return (
                            <EntryCard key={entry.description} entry={entry} />
                        )

                    })}
                </List>
            </Paper>
        </div>
    );
}

export default EntryList;