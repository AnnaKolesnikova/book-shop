import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../../models/BookModel';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
    providedIn: 'root',
})
export class BookService {
    // books: Book[] = BOOKS;
    booksUrl: string;

    constructor(private http: HttpClient) {
        this.booksUrl = 'https://my-json-server.typicode.com/AnnaKolesnikova/demo/books';
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrl);
    }

    toggleCompleted(book: Book): Observable<any> {
        const url = `${this.booksUrl}/${book.id}`;
        return this.http.put(url, book, httpOptions);
    }
}
