import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../services/bookService/book.service';
import { CartService } from 'src/app/services/cartService/cart.service';

import { Book } from '../../models/BookModel';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
    books: Book[] = [];

    @Output() public Buy = new EventEmitter();

    constructor(private bookService: BookService, private cartService: CartService) {}

    ngOnInit(): void {
        this.bookService.getBooks().subscribe((books) => {
            this.books = books;
        });
    }

    onBuyHandler(book): void {
        this.cartService.addBook(book);
    }
}
