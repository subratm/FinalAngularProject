import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url:string="http://localhost:8645/user";
  
  constructor(private http1:HttpClient) { }

  getAllUsers():Observable<User[]>
{
return this.http1.get<User[]>(this.url);
}

viewAllUsers(user:User):Observable<any>
  {
  return this.http1.post(this.url+'/create',user)
  }

  updateUser(userId):Observable<any>{
    return this.http1.post(this.url+'/update',userId);
  }

  deleteUser(userId):Observable<any>{
    return this.http1.post(this.url+'/delete',userId)
  }
}
