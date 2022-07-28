import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB, disconnectMongoDB } from "../../../database";
import { EntryModel, IEntry } from "../../../database/mongoose/models";


export type Data =
    | { message: string }
    | IEntry[]
    | IEntry



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case "GET":
            return getEntries(res)
        case "POST":
            return postEntry(req, res)
          
        default:
            return res.status(405).json({
                message: "Method not allowed"
            })
    }


}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { description = "" } = req.body

    const newEntry = new EntryModel({
        description,
        status: "pending",
        createdAt: new Date(),

    })

    try {
        await connectMongoDB()

        await newEntry.save()

        await disconnectMongoDB()

        return res.status(201).json(newEntry)
    }
    catch (error: any) {
        await disconnectMongoDB()
        console.log(error)
        return res.status(500).json({
            message: error.message
        })
    }


}



const getEntries = async (res: NextApiResponse<Data>) => {
    await connectMongoDB()

    const entries = await EntryModel.find().sort({ createdAt: -1 })

    await disconnectMongoDB()

    res.status(200).json(entries)
}