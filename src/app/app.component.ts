  import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [UserComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    users: undefined | string [];
    handleUsers(user:string[]){
      this.users = user;
    }
  }
