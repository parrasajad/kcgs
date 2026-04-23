export interface BlogPost {
    id?: string | number;
    title: string;
    author: string;
    date: string;
    image: string;
    link?: string;
    category?: string;
    description?: string;
}
