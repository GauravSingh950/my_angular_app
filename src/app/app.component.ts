  import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(private userService:UserService){ }
   
    
  }
