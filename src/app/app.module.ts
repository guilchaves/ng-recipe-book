import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'
import { RecipesComponent } from './features/recipes/recipes.component'
import { RecipeListComponent } from './features/recipes/components/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './features/recipes/components/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './features/recipes/components/recipe-list/recipe-item/recipe-item.component'
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './features/shopping-list/components/shopping-edit/shopping-edit.component'
import { DropdownDirective } from './shared/directives/dropdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
