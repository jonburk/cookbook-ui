import { Component, Input } from '@angular/core'
import { Recipe } from '../shared/recipe'

@Component({
  selector: 'cb-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent {
  @Input()
  recipe: Recipe

  @Input()
  last: boolean

  public getThumbnail () {
    return `http://localhost:8080/api/recipes/${this.recipe.id}/thumbnail`
  }
}
