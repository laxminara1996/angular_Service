import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class ProductserviceService {
private url:any='../assets/db.json';
  constructor(private http:HttpClient) { 
    console.log('--inside the product service');

  }
  greetingMessage():string{
    return "from product-service";
  }
  getData():Observable<Product[]>{
   return this.http.get<Product[]>(this.url);
  }
}
