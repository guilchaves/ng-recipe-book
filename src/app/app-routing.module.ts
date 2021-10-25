import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RecipeDetailComponent } from './features/recipes/components/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './features/recipes/components/recipe-edit/recipe-edit.component'
import { RecipeStartComponent } from './features/recipes/components/recipe-start/recipe-start.component'
import { RecipesComponent } from './features/recipes/recipes.component'
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
