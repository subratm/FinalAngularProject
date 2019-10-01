import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { Project } from '../project';
import { User } from '../user';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private projectService:ProjectService,private userService:UserService )
   { }
project:Project=new Project();
usersList:any
projects:any
select:User
projectDatas:any
searchData:any


  ngOnInit() {
    this.getProject();

    this.userService.getAllUsers().subscribe(
      data=>this.usersList=data);
  }
  getProject(){

    this.projectService.getAllProjects().subscribe(
      
      data=>this.projects=data);
  }
  createProject(){
      this.projectService.saveProject(this.project).subscribe(
       res=>{
       console.log(this.project);
       this.project=new Project();
      })
    }
onEdit(projectname){
this.project=new Project();
this.project=projectname;
}
  
  updateProject(){
    this.projectService.updateProject(this.project).subscribe(
      res=>{
        this.project=res;
          }
    )
      this.getProject();
  }

  deleteproject(projectId){
    this.projectService.deleteProject(projectId).subscribe(
      res=>{
console.log('deleted successfully')
    })
  }

search(term: string) {
  if(!term) {
    this.projects = this.getProject();
  } else {
    this.projects = this.projects.filter(x => 
       x.projectName.trim().toLowerCase().includes(term.trim().toLowerCase())||
       x.priority.toString().trim().toLowerCase().includes(term.trim().toLowerCase())
       );
  }

}    
}
