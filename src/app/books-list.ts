import { Book, Category } from './models/BookModel';

export const BOOKS: Book[] = [
    {
        id: 0,
        name: "Harry Potter and Philosopher's Stone",
        description: 'Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday',
        price: 10,
        category: Category.Fantasy,
        createDate: 1997,
        isAvailable: true,
    },
    {
        id: 1,
        name: 'The Three Musketeers',
        description:
            "The adventures of a young man named d'Artagnan after he leaves home to travel to Paris, hoping to join the Musketeers of the Guard.",
        price: 20,
        category: Category.Adventure,
        createDate: 1844,
        isAvailable: true,
    },
    {
        id: 2,
        name: 'To Kill a Mockingbird',
        description:
            "The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
        price: 30,
        category: Category.Classics,
        createDate: 1960,
        isAvailable: false,
    },
    {
        id: 3,
        name: 'The Great Gatsby',
        description:
            "Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover.",
        price: 25,
        category: Category.Tragedy,
        createDate: 1925,
        isAvailable: false,
    },
];
