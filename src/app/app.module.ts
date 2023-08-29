import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPriceDetailsComponent } from './product-price-details/product-price-details.component';
import { ProductserviceService } from './productservice.service';
import {HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SqrPipe } from './sqr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductPriceDetailsComponent,
    SqrPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
