import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UIContext } from "../../../context/ui";
import { EntryInterface } from "../../../interfaces";
import { getFormatDistanceToNow } from "../../../utils/date_functions";

interface EntryCardProps {
    entry: EntryInterface
}

function EntryCard({ entry }: EntryCardProps) {


    const navigate = useRouter()
    const { startDragging, stopDragging } = useContext(UIContext);

    return (
        <Card
            onClick={() => navigate.push(`/entries/${entry.id}`)}
            sx={{
                marginBottom: 1,

            }}
            draggable
            onDragStart={(e) => {
                startDragging()
                e.dataTransfer.setData("text", entry.id);
            }}
            onDragEnd={(e) => {
                stopDragging()
            }}

        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line", textAlign: "left" }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 2 }}>
                    <Typography variant="body2">{getFormatDistanceToNow(entry.createdAt)}</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default EntryCard;