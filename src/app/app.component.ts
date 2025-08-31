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
  status = true;
  toggleStatus(){
    this.status == true?this.status = false:this.status = true;
  }

}