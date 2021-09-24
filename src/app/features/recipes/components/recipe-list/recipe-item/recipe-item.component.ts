import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Recipe } from '../../../models/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() {}

  ngOnInit(): void {}

  /**
   * This method emits an event that's being listened by the recipeListComponent.
   */
  onSelected() {
    this.recipeSelected.emit()
  }
}
