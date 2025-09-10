import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user); // <-- send user directly
  }
  removeUser(id:string):Observable<User>{
    return this.http.delete<User>(this.url+'/'+id);
  }

  
}
