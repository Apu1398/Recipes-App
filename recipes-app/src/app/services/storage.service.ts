import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, recipe: Recipe[]) {

    localStorage.setItem(key, JSON.stringify(recipe));

  }

  get(key: string): Recipe[] {
    return JSON.parse(localStorage.getItem(key) || "[]");


  }

  
}