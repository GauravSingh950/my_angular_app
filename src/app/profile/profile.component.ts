import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private route:ActivatedRoute){  }
  username: string | null = "";
  // ngOnInit(){
  //   this.username = this.route.snapshot.paramMap.get('name');
  // }
  ngOnInit() {
    

    this.route.queryParams.subscribe(params => {
      console.log(params['name']);
      if(params['name']){
        this.username = params['name'];
      }
    });
    const paramName = this.route.snapshot.paramMap.get('name');
    if(paramName){
      this.username = paramName;
    }
  }  
}
 