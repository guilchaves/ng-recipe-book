import { Component, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.recipes = this.recipeService.getRecipes()
  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    })
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute })
  }
}
