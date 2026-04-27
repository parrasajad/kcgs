export interface Event {
    id?: string | number;
    title: string;
    date: string;
    time?: string;
    location?: string;
    image: string;
    category?: string;
    link?: string;
}
