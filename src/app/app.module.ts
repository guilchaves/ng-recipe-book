import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { RecipesModule } from './features/recipes/recipes.module'
import { ShoppingListModule } from './features/shopping-list/shopping-list.module'

import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RecipesModule, ShoppingListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
