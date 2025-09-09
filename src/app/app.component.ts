  import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { ProductService } from './service/product.service';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [UserComponent,CommonModule, CurrencyConverterPipe],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(private productServices: ProductService){  }
    productList :any;

    ngOnInit(){
      this.productServices.getProductList().subscribe((data:any)=>{
       this.productList = data.products;
      })
    }
  }
