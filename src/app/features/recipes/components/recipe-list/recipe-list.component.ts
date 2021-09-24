import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from '../../models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  /**
   * This method emits a recipe received from another component
   * to it's listener on recipesComponent.
   *
   * @param recipe Recipe emitted from the recipeItemComponent.
   */
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
