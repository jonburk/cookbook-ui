import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {
  private recipeUrl = 'http://localhost:8080/api/recipes/';

  constructor(private http: Http) { }

  getSearchHints(startsWith: string): Promise<string[]> {
    return this.http.get(this.recipeUrl + 'search-terms?startsWith=' + startsWith)
               .toPromise()
               .then(response => response.json() as string[])
               .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
