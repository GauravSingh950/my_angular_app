  import { Component } from '@angular/core';
  import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
  

  @Component({
    selector: 'app-root',
    imports: [RouterLink,RouterOutlet,RouterLinkActive,PageNotFoundComponent,HeaderComponent], 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    login = false;
  }
