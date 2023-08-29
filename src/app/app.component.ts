import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './productservice.service';
import {Product} from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  message='';
  dt:Date=new Date();
  discount:number=2;
  productsDet:Product[]=[];
  constructor(private productservice:ProductserviceService){}
ngOnInit(): void {
  this.message=this.productservice.greetingMessage();
  this.productservice.getData().subscribe((data)=>{
    console.log('log'+data);
    this.productsDet=data;
  })
}
  }

