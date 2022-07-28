export interface EntryInterface {
    _id?: string
    id: string;
    description: string;
    createdAt: Date;
    status: EntryStatusType;
}

export type EntryStatusType = 'pending' | 'in-progress' | 'done';