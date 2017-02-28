import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './recipes/search.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
