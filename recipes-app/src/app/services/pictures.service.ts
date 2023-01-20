import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }

  getBase64(file:any) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

}
