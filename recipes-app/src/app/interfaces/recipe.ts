import { Ingredient } from "./ingredient";

export interface Recipe {
    title:string,
    description:string,
    ingredients:Ingredient[],
    picture:string
}
