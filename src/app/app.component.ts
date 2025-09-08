  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { NgIf } from '@angular/common';
  

  @Component({
    selector: 'app-root',
    imports: [RouterLink,RouterOutlet,RouterLinkActive,PageNotFoundComponent,HeaderComponent,
              ReactiveFormsModule,NgIf,FormsModule
              ], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    addUserDetails(val: NgForm){
      console.log(val);
    }
  }
