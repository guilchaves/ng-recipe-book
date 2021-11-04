import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Ingredient } from './models/ingredient.model'
import { ShoppingListService } from './services/shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = []
  private igChangeSub: Subscription

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }

  /**
   * This method is triggered when the ingredientAdded event is emitted.
   * @param ingredient The Ingredient object from the child's component EventEmitter.
   */
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient)
  //   this.shoppingListService.addIngredient(ingredient)
  // }
}
