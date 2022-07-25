import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB, disconnectMongoDB } from "../../../database";
import { EntryModel, IEntry } from "../../../database/mongoose/models";


type Data =
    | { message: string }
    | IEntry[]



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case "GET":
            return getEntries(res)

        default:
            return res.status(405).json({
                message: "Method not allowed"
            })
    }


}


const getEntries = async (res: NextApiResponse<Data>) => {
    await connectMongoDB()

    const entries = await EntryModel.find().sort({ createdAt: -1 })

    await disconnectMongoDB()

    res.status(200).json(entries)
}