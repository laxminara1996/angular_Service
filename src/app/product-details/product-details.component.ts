import { Component } from '@angular/core';
import productdata from '../mydata.json'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
products:product[]=productdata;
constructor(){
  console.log(productdata);
}
}
interface product{
  pid:number;
  pname:string;
  price:number;
}