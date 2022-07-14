export interface EntryInterface {
    id: string;
    description: string;
    createdAt: Date;
    status: EntryStatusType;
}

export type EntryStatusType = 'pending' | 'in-progress' | 'done';