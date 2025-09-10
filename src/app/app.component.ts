  import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { User } from './interface/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  

  @Component({
    selector: 'app-root',
    standalone:true,
    imports: [CommonModule, HttpClientModule,FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    constructor(private userService:UserService){ }
    user:User[] | undefined;
    ngOnInit() {
      // Fetch raw users and map to our User interface
      this.userService.getUsers().subscribe((raw: any[]) => {
        this.user = raw.map(u => ({
          name: u.name,
          APM_ID: u['APM_ID'],
          Age: u.Age
        }));
        console.log(this.user);
      });
    }
    onSubmit(user:User){
      this.userService.addUser(user).subscribe((data:any)=>{
        console.log(user);
      })
    }
    deleteUser(id:string){
      this.userService.removeUser(id).subscribe((data:any)=>{
        console.log("User Succesfully Removed");
      })
    }
    
  }
