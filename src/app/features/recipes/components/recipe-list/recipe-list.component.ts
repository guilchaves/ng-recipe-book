import { Component, EventEmitter, OnInit, Output } from '@angular/core'

import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[]
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes()
  }

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
