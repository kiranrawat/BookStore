import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Book Store';
  searchBooks(book: string) {
    if (book) {
      //stuff to do here
    }
}
}