export interface Book {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
}

export const enum Category {
    Fantasy = 'Fantasy',
    Adventure = 'Adventure',
    Mystery = 'Mystery',
    Thriller = 'Thriller',
    Romance = 'Romance',
    Classics = 'Classics',
    Tragedy = 'Tragedy',
}
