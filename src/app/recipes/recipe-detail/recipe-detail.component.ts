import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    // recipe.ingredient.forEach((ingredient) => {
    //   const newIngredient = new Ingredient(
    //     ingredient.name,
    //     ingredient.amount
    //   )
    //   this.shoppingListService.addIngredients(newIngredient)
    // })

    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
    
  }
}
