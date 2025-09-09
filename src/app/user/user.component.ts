import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    name = "Anil"
    @Input() counter = 0;
    // constructor(){
    //   console.log("constructor");
    //   this.name = "Aman"
    // }
    // ngOnInit(){
    //   console.log("Initialization");
    //   this.name = "Yaman"
    // }
    // ngOnDestroy(){
    //   console.log("Component Destroyed");
    // }
    // ngOnChanges(){
    //   console.log("Input Changed");
 
    // }
}
