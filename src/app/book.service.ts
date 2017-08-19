import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class BookService{
private booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
constructor(private http: Http){}

getBooks(){
    return this.http.get(this.booksUrl)
                    .toPromise()
                    .then(response => response.json().data)
                    .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
}
}
