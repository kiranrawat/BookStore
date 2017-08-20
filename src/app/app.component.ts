import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Google Book Store';

    constructor(
        private bookService: BookService,
        private http: Http
    ) { }

    searchBooks(bookname: string): void {
        // this.bookService.getBooks(term);
        console.log(bookname);
        // Call url 'https://www.googleapis.com/books/v1/volumes?q=' and display result in console.
        let url = 'https://www.googleapis.com/books/v1/volumes?q='+bookname;
        this.http.get(url)
            .toPromise()
            .then(function(res){
                console.log(res.json());
            })
            .catch(function(err){
                console.log(err);
            });
    }
}