export type ISyllabus = {
    id: number;
    name: string;
    code: string;
    description: string | null;
    year: number | null;
    gradeLevels: string[] | null;
    language: string | null;
    createdAt: Date;
    updatedAt: Date;
};