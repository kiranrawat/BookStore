import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls:['./book-list.component.css']
})
export class BookListComponent {
    books:any[];
    imageWidth:number = 50;
    imageMargin:number = 2;
    showImage:boolean = false;
    listFilter:string = 'ramayan';
    constructor(
        private http: Http
    ) { 
    }

    searchBooks(bookname: string): void {
        // this.bookService.getBooks(term);
        console.log(bookname);
        // Call url 'https://www.googleapis.com/books/v1/volumes?q=' and display result in console.
        let url = 'https://www.googleapis.com/books/v1/volumes?q=' + bookname;
      
        this.http.get(url)
            .toPromise()
            .then((res) => {
                console.log(res.json());
                // json.res.forEach(element => {
                //     list.push(element.Id);
                // });
                this.books = res.json().items;
            })
            .catch(function (err) {
                console.log(err);
            });
       
    }
toggleImage(): void{
    this.showImage = !this.showImage;
}
}