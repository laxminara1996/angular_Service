import { Component } from '@angular/core';
import productdata from '../mydata.json';
@Component({
  selector: 'app-product-price-details',
  templateUrl: './product-price-details.component.html',
  styleUrls: ['./product-price-details.component.css']
})
export class ProductPriceDetailsComponent {
constructor( ){
  console.log(productdata);
}
products:product[]=productdata;
  
}
interface product{
  pid:number;
  pname:string;
  price:number;
}
