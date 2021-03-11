import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '../../services/bookService/book.service';

import { Book } from 'src/app/models/BookModel';

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
    @Input() book!: Book;

    @Output() public Buy = new EventEmitter();

    constructor(private bookService: BookService) {}

    setClasses() {
        let classes = {
            book: true,
            'is-available': this.book.isAvailable,
        };
        return classes;
    }

    onToggle(book) {
        book.isAvailable = !book.isAvailable;
        this.bookService.toggleCompleted(book).subscribe((book) => {
            console.log(book);
        });
    }

    onBuy(book): void {
        console.log('I wanna buy ' + book.name);
        this.Buy.emit(book);
    }
}
