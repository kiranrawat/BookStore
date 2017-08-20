import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    private booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

    constructor(private http: Http){
        console.log('Book Service constructor.')
    }

    getBooks(name: string){
        const url = `${this.booksUrl}/${name}`;
        return this.http.get(url)
                        .map(response => response.json().data);
                        
    }
}
