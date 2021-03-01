import IBook from './models/book';

export const BOOKS: IBook[] = [
    {
        id: 0,
        name: "Harry Potter and Philosopher's Stone",
        description: 'Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday',
        price: 10,
        category: Cathegory.Fantasy,
        createDate: 1997,
        isAvailable: true,
    },
    {
        id: 1,
        name: 'The Three Musketeers',
        description:
            "the adventures of a young man named d'Artagnan after he leaves home to travel to Paris, hoping to join the Musketeers of the Guard.",
        price: 10,
        category: Category.Adventure,
        createDate: 1844,
        isAvailable: true,
    },
    {
        id: 2,
        name: 'To Kill a Mockingbird',
        description:
            "The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
        price: 10,
        category: Category.Classics,
        createDate: 1960,
        isAvailable: false,
    },
];
