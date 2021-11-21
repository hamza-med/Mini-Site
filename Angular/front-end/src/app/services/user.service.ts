import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
  getUsers(): Observable<User[]>{
    const searchUrl = this.baseUrl + '/employees/'
    return this.http.get<User[]>(searchUrl, { headers: this.httpHeaders });
  }

  getOneUser(id:number): Observable<User>{
    const searchUrl = this.baseUrl + '/employees/' + id + '/';
    return this.http.get<User>(searchUrl, { headers: this.httpHeaders });
  }

  UpdateUser(user:User): Observable<User>{
    const searchUrl = this.baseUrl + '/employees/' + user.id + '/';
    const body = {name:user.name,lastName:user.lastName,age:user.age}
    return this.http.put<User>(searchUrl,body, { headers: this.httpHeaders });
  }

  addUser(user:User): Observable<User>{
    const searchUrl = this.baseUrl + '/employees/' ;
    const body = {name:user.name,lastName:user.lastName,age:user.age}
    return this.http.post<User>(searchUrl,body, { headers: this.httpHeaders });
  }

  deleteUser(user:User): Observable<User>{
    const searchUrl = this.baseUrl + '/employees/'+user.id+'/' ;
    return this.http.delete<User>(searchUrl, { headers: this.httpHeaders });
  }
}
