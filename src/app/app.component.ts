  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserComponent } from './user/user.component';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [RouterLink,RouterOutlet,RouterLinkActive,PageNotFoundComponent,HeaderComponent,
              ReactiveFormsModule,NgIf,FormsModule, UserComponent
              ], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    selectedUser: string = '';
  }
