import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Recipe } from '../shared/recipe';

@Injectable()
export class RecipeService {
  private recipeUrl = 'http://localhost:8080/api/recipes/';

  constructor(private http: Http) { }

  getSearchHints(startsWith: string): Promise<string[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('startsWith', startsWith);

    return this.http.get(this.recipeUrl + 'search-terms', { search: params })
               .toPromise()
               .then(response => response.json() as string[])
               .catch(this.handleError);
  }

  search(terms: string[], offset: number, limit: number): Observable<Recipe[]> {
    const params: URLSearchParams = new URLSearchParams();
    terms.forEach(t => params.set('search', t));
    params.set('search', terms[0]);
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());

    return this.http.get(this.recipeUrl, { search: params })
               .map(response => response.json() as Recipe[]);
  }

  private handleError(error: any) : Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}