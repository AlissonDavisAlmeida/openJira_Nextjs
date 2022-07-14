import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { EntryInterface } from "../../../interfaces";

interface EntryCardProps {
    entry: EntryInterface
}

function EntryCard({ entry }: EntryCardProps) {
    return (
        <Card
            sx={{
                marginBottom: 1,

            }}

        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: "pre-line", textAlign: "left" }}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 2 }}>
                    <Typography variant="body2">last 30 min</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default EntryCard;