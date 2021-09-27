import { EventEmitter, Injectable } from '@angular/core'

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
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Gyudon_by_jetalone_in_Higashi-Ginza%2C_Tokyo.jpg'
    ),
    new Recipe(
      'Udon',
      'A traditional noodle dish',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Udon-M1336.jpg/800px-Udon-M1336.jpg'
    ),
  ]

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }
}
