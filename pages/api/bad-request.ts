import { NextApiRequest, NextApiResponse } from "next"


type Data = {
    ok: boolean
    messages: string | string[]
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){

    const { messages = "Bad request" } = req.query

    res.status(400).json({
        ok: false,
        messages
    })
}