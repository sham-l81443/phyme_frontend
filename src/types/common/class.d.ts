export type IClass = {
    id: number;
    name: string;
    section: string | null;
    description: string | null;
    code: string;
    syllabusId: number;
    createdAt: Date;
    updatedAt: Date;
};