import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './features/shopping-list/components/shopping-edit/shopping-edit.component'
import { RecipesModule } from './features/recipes/recipes.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
