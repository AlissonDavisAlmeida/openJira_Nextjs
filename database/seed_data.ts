
interface ISeedData {
    entries : ISeedDataEntry[]
    
}


interface ISeedDataEntry {
    description: string
    status: string 
    createdAt: Date
}

export const seedData: ISeedData = {
    entries: [
        {

            status: "pending",
            description: "Pending: Pending task",
            createdAt: new Date(),
        },
        {

            status: "in-progress",
            description: "In Progress: In progress task",
            createdAt: new Date(),
        },
        {

            status: "done",
            description: "Done task",
            createdAt: new Date(),
        },
    ]
}