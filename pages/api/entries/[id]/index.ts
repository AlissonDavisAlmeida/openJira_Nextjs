import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"
import { Data } from ".."
import { connectMongoDB, disconnectMongoDB } from "../../../../database"
import { EntryModel } from "../../../../database/mongoose/models"



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case "PUT":
            return putEntry(req, res)
        case "GET":
            return getEntry(req, res)
        default:
            return res.status(405).json({
                message: "Method not allowed"
            })
    }


}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    if (!id || !mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Missing id or invalid id"
        })
    }

    try {
        await connectMongoDB()

        const entry = await EntryModel.findById(id)

        if (!entry) {
            return res.status(404).json({
                message: "Entry not found"
            })
        }

        await disconnectMongoDB()

        return res.status(200).json(entry)
    }
    catch (error: any) {
        await disconnectMongoDB()
        console.log(error)
        return res.status(500).json({
            message: error.message
        })
    }
}


const putEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query


    if (!id || !mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            message: "Missing id or invalid id"
        })
    }

    try {
        await connectMongoDB()

        const entry = await EntryModel.findById(id)

        const { status = "pending", description = entry?.description } = req.body

        if (!entry) {
            return res.status(404).json({
                message: "Entry not found"
            })
        }

        entry.status = status
        entry.description = description

        await entry.save()

        await disconnectMongoDB()

        return res.status(200).json(entry)
    }
    catch (error: any) {
        await disconnectMongoDB()
        console.log(error)
        return res.status(500).json({
            message: error.message
        })
    }
}