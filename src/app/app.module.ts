import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
// import { Http } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    providers: [
    
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
