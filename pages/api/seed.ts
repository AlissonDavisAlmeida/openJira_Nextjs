import type { NextApiRequest, NextApiResponse } from "next"

type Data = {

}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const url = process.env.MONGO_URI!;
    console.log(url);
    res.status(200).json({
        data: {
            message: "Hello World",
        },
        
    })

}