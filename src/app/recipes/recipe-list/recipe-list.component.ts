import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fish with sparages', 'Example description', 'https://www.eatwell101.com/wp-content/uploads/2017/03/' +
      'Garlic-Butter-Chicken-asparagus-recipes.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
