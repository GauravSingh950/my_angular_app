import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, ProfileComponent], // Removed RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo
})
export class AppComponent {
  title = 'my-angular-app';
  tempUsername = "";
  username = "Gaurav";

  getUsername(event:Event){
    this.tempUsername = (event.target as HTMLInputElement).value;
     console.log(this.tempUsername);
  }

  setUsername(){
    this.username = this.tempUsername;
    console.log(this.username);
  }
}