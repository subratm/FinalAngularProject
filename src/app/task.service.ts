import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl:string="http://localhost:8645/task"
  constructor(private http:HttpClient) { }

  

  getallTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }

  saveTask(task:Task):Observable<any>{
    return this.http.post(this.baseUrl+'/create', task);
  }

  deleteTask(taskId):Observable<any>{
    	
    console.log(taskId)
    return this.http.post(this.baseUrl+'/delete', taskId);
  }

  updateTask(taskId):Observable<any>{
    console.log(typeof taskId);
    console.log(taskId);
    return this.http.post(this.baseUrl+'/update',taskId);
  }
}
