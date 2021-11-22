import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared/shared.module'
import { RouterModule } from '@angular/router'

import { RecipeListComponent } from './components/recipe-list/recipe-list.component'
import { RecipesComponent } from './recipes.component'
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component'
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
  ],
})
export class RecipesModule {}
