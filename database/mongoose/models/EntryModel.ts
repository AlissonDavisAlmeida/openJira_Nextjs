import mongoose, { Model, Schema } from "mongoose";
import { EntryInterface } from "../../../interfaces";

export interface IEntry extends EntryInterface{
    
}


const entrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: { type: Date },
    status: {
        type: String,
        enum: ["pending", "in-progress", "done"],
        message: "{VALUE} must be one of: pending, in-progress, done"
    }
})


export const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

