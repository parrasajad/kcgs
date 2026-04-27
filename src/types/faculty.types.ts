export interface FacultyMember {
    id?: string | number;
    name: string;
    designation: string;
    department?: string;
    email?: string;
    phone?: string;
    phoneDisplay?: string;
    specialty?: string;
    image: string;
    link?: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        youtube?: string;
        instagram?: string;
    };
}
