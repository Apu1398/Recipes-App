import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { Recipe } from 'src/app/interfaces/recipe';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private storageService:StorageService, private router:Router) { }

  selectedRecipe:Recipe = {
    title:"",
    description:"",
    picture:"",
    ingredients:[]
  }

  

  ngOnInit(): void {
    this.selectedRecipe = this.storageService.get("selectedRecipe")[0];
    if (this.selectedRecipe == undefined) {
      alert("No hay ninguna receta agregada");
      this.router.navigate(["/insert"]);
    } 
  }

  changeStatus(ingredient:Ingredient){
    ingredient.done =! ingredient.done;
  }

}
