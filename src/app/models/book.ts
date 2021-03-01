export default interface IBook {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Cathegory;
    createDate: number;
    isAvailable: boolean;
}

enum Cathegory {
    Adventure,
    Classics,
    Comics,
    Detective,
    Mystery,
    Fantasy,
}
