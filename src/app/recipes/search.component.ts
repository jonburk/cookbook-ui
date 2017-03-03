import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
import { RecipeService } from './recipe.service';
import { Recipe } from '../shared/recipe';

import 'rxjs/add/observable/of';

@Component({
  selector: 'cb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [RecipeService]
})

export class SearchComponent implements OnInit {
  searchHints: Observable<string[]>;
  searchTerm: string;
  searchTermShadow: string;
  recipes: Recipe[];
  busy: boolean;
  hasSearched: boolean;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.searchHints = Observable.create((observer: any) => {
      observer.next(this.searchTerm);
    }).mergeMap((startsWith: string) => this.getSearchHints(startsWith));    
  }

  public typeaheadOnSelect(e: TypeaheadMatch): void {
    const terms = this.getTerms(this.searchTermShadow);
    
    if (terms.length > 1) {
      terms[terms.length - 1] = terms[terms.length - 1].startsWith('-') ? '-' + e.value : e.value;
      this.searchTerm = terms.join(', ');
    }

    this.searchTerm += ', '
  }

  public search(event: any) : void {
    this.busy = true;
    const terms = this.getTerms(this.searchTerm || '').filter(s => s.length > 0);
    this.recipeService.search(terms, 0, 10).subscribe(recipes => {
      this.busy = false;
      this.hasSearched = true;
      this.recipes = recipes;
    });  
  }

  public getSearchButtonClasses() {
    return {
      fa: true,
      'fa-search': !this.busy,
      'fa-circle-o-notch': this.busy,
      'fa-spin': this.busy
    }
  }

  public getEmptyResultsClasses() {
    return {
      fa: true,
      'fa-frown-o': this.hasSearched && this.recipes.length === 0,
      'fa-cutlery': !this.hasSearched
    }
  }

  private getSearchHints(startsWith: string) : Promise<string[]> {
    this.searchTermShadow = startsWith;
    const terms = this.getTerms(startsWith);
    const searchTerm = terms[terms.length - 1].replace('-', '');
    
    return searchTerm ? this.recipeService.getSearchHints(searchTerm) : new Promise<string[]>(r => r([]));
  }

  private getTerms(startsWith: string) : string[] {
    return startsWith.split(',').map(s => s.trim());
  }
}
