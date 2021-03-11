import { Injectable } from '@angular/core';
import { Book } from '../../models/BookModel';
import { CartItem } from '../../models/CartModel';
import { BookService } from '../bookService/book.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    purchases: CartItem[] = [];

    CartContent: Book[] = [];

    constructor(private bookService: BookService) {}

    addBook(book) {
        const { id, name, price } = book;
        this.CartContent.push(book);
        this.purchases.push({ id, name, price, count: 1 });
    }

    removeBook(id) {
        const index = this.purchases.findIndex((p) => p.id === id);
        this.purchases.splice(index, 1);
        //   this.bookService.changeStatus(id);
    }

    getPurchases(): CartItem[] {
        return this.purchases;
    }
}
