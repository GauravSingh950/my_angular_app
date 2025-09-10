  import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { User } from './interface/user';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [UserComponent, CommonModule, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(private userService:UserService){ }
    user:User[] | undefined;
    ngOnInit() {
      // Fetch raw users and map to our User interface
      this.userService.getUsers().subscribe((raw: any[]) => {
        this.user = raw.map(u => ({
          name: u.name,
          APM_ID: u['APM ID'],
          Age: u.Age
        }));
        console.log(this.user);
      });
    }
    
  }
