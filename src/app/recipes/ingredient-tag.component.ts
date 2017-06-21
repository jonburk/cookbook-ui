import { Component, Input } from '@angular/core'
import { Ingredient } from '../shared/ingredient'

@Component({
  selector: 'cb-ingredient-tag',
  templateUrl: './ingredient-tag.component.html',
  styleUrls: ['./ingredient-tag.component.scss']
})

export class IngredientTagComponent {
  @Input()
  ingredient: Ingredient

  public getClass () {
    return {
      ingredientTag: true,
      label: true,
      'label-info': !this.ingredient.warn,
      'label-danger': this.ingredient.warn
    }
  }
}
