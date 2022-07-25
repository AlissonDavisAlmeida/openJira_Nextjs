import type { NextApiRequest, NextApiResponse } from "next"
import { connectMongoDB, disconnectMongoDB } from "../../database"

type Data = {
    message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({
            message: "This endpoint is not available in production"
        })

    }

    await connectMongoDB()


    


    await disconnectMongoDB()

    res.status(200).json({
        message: "Seeding data"

    })

}