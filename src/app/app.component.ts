  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
  

  @Component({
    selector: 'app-root',
    imports: [RouterLink,RouterOutlet,RouterLinkActive,PageNotFoundComponent,HeaderComponent,
              ReactiveFormsModule
              ], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    
    profileForm = new FormGroup({
      name: new FormControl(),
      password : new FormControl(),
      email: new FormControl()
    });
    onSubmit(){
      console.log(this.profileForm.value);
      
    }
    setValue(){
      this.profileForm.setValue({
        name:"Khus Taunk",
        password:"khus@123",
        email:"taunkiDaunki@gmail.com"
      });
    }
  }
