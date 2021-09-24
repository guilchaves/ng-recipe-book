import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared/shared.module'

import { RecipeListComponent } from './components/recipe-list/recipe-list.component'
import { RecipesComponent } from './recipes.component'
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component'

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
})
export class RecipesModule {}
