import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { TypeaheadModule } from 'ngx-bootstrap'
import { BsDropdownModule } from 'ngx-bootstrap'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { AppComponent } from './app.component'
import { SearchComponent } from './recipes/search.component'
import { SearchResultComponent } from './recipes/search-result.component'
import { IngredientTagComponent } from './recipes/ingredient-tag.component'
import { ViewRecipeComponent } from './recipes/view.component'

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    IngredientTagComponent,
    ViewRecipeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
