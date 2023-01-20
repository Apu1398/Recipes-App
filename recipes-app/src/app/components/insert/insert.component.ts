import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { Recipe } from 'src/app/interfaces/recipe';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  recipeForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    picture: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required])
  });

  constructor(private storageService: StorageService, private router: Router) { }

  imgSRC?: string;
  imgAlt?: string;
  recipes: Recipe[] = [];
  ingredients: Ingredient[] = []

  ngOnInit(): void {
    this.recipes = this.storageService.get("recipes");
    this.ingredients = [];
  }


  imageChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.imgAlt = file.name;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgSRC = reader.result as string;
    };
  }

  saveRecipe() {

    for (let ingredient of this.recipeForm.get("ingredients")?.value.split("\n")) {
      if (ingredient != "") this.ingredients.push({"name": ingredient, "done": false })
    }

    let newRecipe: Recipe = {
      title: this.recipeForm.get("title")?.value,
      description: this.recipeForm.get("description")?.value,
      ingredients: this.ingredients,
      picture: this.imgSRC as string
    }
    
    this.recipes?.push(newRecipe);
    this.storageService.set("recipes", this.recipes);

    this.router.navigate(["dashboard"]);
  }



}
