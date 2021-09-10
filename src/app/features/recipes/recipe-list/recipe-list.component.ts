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
}
