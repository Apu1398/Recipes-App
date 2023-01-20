import { Component, ElementRef, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Recipe } from 'src/app/interfaces/recipe';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private storageService:StorageService, private router:Router) { }

  imgSRC?:string;
  imgAlt?:string;
  recipes:Recipe[] = [];
  recipesToShow:Recipe[] = [];

  public lastRecipe:Recipe = {
    title:"",
    description:"",
    picture:"",
    ingredients:[]
  };
  

  ngOnInit(): void {
    
    this.recipes = this.storageService.get("recipes");
    if (this.recipes.length > 0)  this.lastRecipe = this.recipes[this.recipes.length -1];
    else {
      alert("No hay recetas en el sistema, agregue una")
      this.router.navigate(["insert"])
    }
    this.recipesToShow = this.recipes;
  }

  filterRecipes(event:any){
    this.recipesToShow = this.recipes.filter(function(item:Recipe){
      return item.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

  viewDetails(recipe:Recipe){
    this.storageService.set("selectedRecipe", [recipe]);
    this.router.navigate(["details"]);
  }
}
