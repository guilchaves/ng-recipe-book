import { Component, OnInit } from '@angular/core'
import { Ingredient } from 'src/app/core/models/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Shoyu', 3),
  ]

  constructor() {}

  ngOnInit(): void {}
}
