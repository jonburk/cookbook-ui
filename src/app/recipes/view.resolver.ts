import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import { Recipe } from '../shared/recipe'
import { RecipeService } from './recipe.service'

@Injectable()
export class ViewRecipeResolver implements Resolve<Recipe> {
  constructor (private recipeService: RecipeService) { }

  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.recipeService.getRecipe(route.params.id)
  }
}
