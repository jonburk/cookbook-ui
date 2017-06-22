import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SearchComponent } from './recipes/search.component'
import { ViewRecipeComponent } from './recipes/view.component'
import { ViewRecipeResolver } from './recipes/view.resolver'
import { RecipeService } from './recipes/recipe.service'

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'recipes/:id', component: ViewRecipeComponent, resolve: { recipe: ViewRecipeResolver } }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ ViewRecipeResolver, RecipeService ]
})

export class AppRoutingModule {}
