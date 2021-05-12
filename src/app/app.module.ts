import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './book/listbook/listbook.component';
import { CreatebookComponent } from './book/createbook/createbook.component';
import { UpdatebookComponent } from './book/updatebook/updatebook.component';
import { DeletebookComponent } from './book/deletebook/deletebook.component';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowbookComponent } from './book/showbook/showbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    CreatebookComponent,
    UpdatebookComponent,
    DeletebookComponent,
    ShowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
