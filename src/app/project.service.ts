import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl:string="http://localhost:8645/project"
  constructor(private http:HttpClient) 
  { 


  }

getAllProjects():Observable<Project[]>{
  return this.http.get<Project[]>(this.baseUrl);

}
saveProject(project:Project):Observable<any>{
  return this.http.post(this.baseUrl+'/create', project);
}

deleteProject(projectId):Observable<any>{
    
  console.log(projectId)
  return this.http.post(this.baseUrl+'/delete', projectId);
}

updateProject(projectId):Observable<any>{
  console.log(typeof projectId);
  console.log(projectId);
  return this.http.post(this.baseUrl+'/update',projectId);
}
}


