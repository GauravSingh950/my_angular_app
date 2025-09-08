import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() getUsers = new EventEmitter();
  users = ["Gaurav","Aman","Yaman","Bishu"];
  // ngOnInit(){
  //   this.getUsers.emit(this.users);
  // }
}
