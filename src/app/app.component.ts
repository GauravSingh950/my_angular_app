import { Component, effect, signal } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, ProfileComponent], // Removed RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo
})
export class AppComponent {
  count = signal(10);
  x = 20;

  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }
  updateValue(){
    this.count.set(this.count() + 1);
  }
}