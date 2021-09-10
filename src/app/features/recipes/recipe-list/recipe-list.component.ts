import { Component, OnInit } from '@angular/core'
import { Recipe } from 'src/app/core/models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'Test',
      'This is a test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
  ]

  constructor() {}

  ngOnInit(): void {}
}
