  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { NgIf } from '@angular/common';
  

  @Component({
    selector: 'app-root',
    imports: [RouterLink,RouterOutlet,RouterLinkActive,PageNotFoundComponent,HeaderComponent,
              ReactiveFormsModule,NgIf
              ], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    
    profileForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    });
    onSubmit(){
      console.log(this.profileForm.value);
    }

    get name(){
      return this.profileForm.get('name');
    }
    get password(){
      return this.profileForm.get('password');
    }
    get email(){
      return this.profileForm.get('email');
    }
  }
