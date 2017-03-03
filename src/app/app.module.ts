import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TypeaheadModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './recipes/search.component';
import { SearchResultComponent } from './recipes/search-result.component';
import { IngredientTagComponent } from './recipes/ingredient-tag.component';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    IngredientTagComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
