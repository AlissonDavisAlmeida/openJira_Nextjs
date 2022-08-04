import { isValidObjectId } from "mongoose"
import { connectMongoDB, disconnectMongoDB } from "./db"
import { EntryModel, IEntry } from "./mongoose/models"

export const getEntryById = async (id: number): Promise<Omit<IEntry, 'id' | '_id'> | null> => {
    if (!isValidObjectId(id)) return null

    await connectMongoDB()
    const entry = await EntryModel.findById(id).lean()

    await disconnectMongoDB()

    if (!entry) return null

    return entry
}