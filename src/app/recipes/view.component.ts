import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Recipe } from '../shared/recipe'

@Component({
  selector: 'cb-view-recipe',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewRecipeComponent implements OnInit {
  recipe: Recipe

  constructor (private route: ActivatedRoute) { }

  ngOnInit (): void {
    this.route.data.subscribe((data: { recipe: Recipe }) => {
      this.recipe = data.recipe
    })
  }

  getIngredients (): string {
    return this.recipe.ingredients.map(i => i.name).join(', ')
  }

  getPicture () {
    return `http://localhost:8080/api/recipes/${this.recipe.id}/photo`
  }
}
