import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { User } from '../user';
import { Project } from '../project';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
  providers:[TaskService]
})
export class AddtaskComponent implements OnInit {

  constructor(private taskService:TaskService,private userService:UserService,
    private projectService:ProjectService) {
      
 }

  model:any;
  usersList:any;
  projectsList:any;

  ngOnInit() {
    this.model = new Task();

    this.userService.getAllUsers().subscribe(
      data => this.usersList = data,
     );

this.projectService.getAllProjects().subscribe(
  data => this.projectsList = data,
  );

    
  }

  createTask(){
    this.taskService.saveTask(this.model).subscribe(res=>{
      console.log('created successfully!');
      this.model= new Task();
    });
  }

}
