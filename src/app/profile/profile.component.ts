import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    constructor(private route:ActivatedRoute){}
    userId : number | null = null;
    ngOnInit(){
      const idParam = this.route.snapshot.paramMap.get('id');
      this.userId = idParam !== null ? parseInt(idParam) : null;
      console.log(idParam);
    }
    
}
 