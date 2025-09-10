import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }
}
