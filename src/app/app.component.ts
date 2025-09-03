  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
  

  @Component({
    selector: 'app-root',
    imports: [RouterLink,RouterOutlet,HeaderComponent,RouterLinkActive], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    login = false;
  }
