export interface Course {
    id?: string | number;
    title: string;
    description?: string;
    image: string;
    category?: string;
    lessons?: number;
    students?: number;
    rating?: number;
    author?: string;
    price?: string | number;
    link?: string;
}
