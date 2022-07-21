import mongoose from "mongoose";

const mongooConection = {
    isConnected: 0,
}

export const connectMongoDB = async ()=>{
    if(mongooConection.isConnected){
        console.log("MongoDB is already connected");
        return;
    }

    if(mongoose.connections.length > 1){
        mongooConection.isConnected = mongoose.connections[0].readyState;

        if(mongooConection.isConnected === 1){
            console.log("MongoDB is already connected");
            return;
        }

        await mongoose.disconnect();
    }

    mongoose.connect(process.env.MONGO_URI!);
    mongooConection.isConnected = 1;
    console.log("MongoDB is connected: mongodb://localhost:27017/entriesDB");
}

export const disconnectMongoDB = async ()=>{
    if(mongooConection.isConnected === 0){
        console.log("MongoDB is not connected");
        return;
    }

    await mongoose.disconnect();
    mongooConection.isConnected = 0;
    console.log("MongoDB is disconnected");
}