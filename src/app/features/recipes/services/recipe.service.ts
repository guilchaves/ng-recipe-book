import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../../shopping-list/models/ingredient.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service'

import { Recipe } from '../models/recipe.model'

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Gyudon',
      'A delicious beef and rice bowl',
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Gyudon_by_jetalone_in_Higashi-Ginza%2C_Tokyo.jpg',
      [new Ingredient('Beef', 1), new Ingredient('Rice', 2)]
    ),
    new Recipe(
      'Udon',
      'A traditional noodle dish',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Udon-M1336.jpg/800px-Udon-M1336.jpg',
      [new Ingredient('Noodles', 1), new Ingredient('Fish Stock', 1)]
    ),
  ]

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
