import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){  }
  goToProfile(){
    this.router.navigate( ['profile'],{queryParams:{name:'Gaurav Singh'}});
  }
}
