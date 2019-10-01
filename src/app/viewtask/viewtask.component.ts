import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

   tasks:any;
   model:any
   search:any;
   projectsList:any
  constructor(private taskService:TaskService,private projectService:ProjectService) { }

  fetchAll(){
    this.taskService.getallTasks().subscribe(res=>{
      this.tasks = res;
      console.log(res);
    });
  }
  
  ngOnInit() {
    this.model=new Task();
    this.fetchAll();

    this.projectService.getAllProjects().subscribe(res=>{
      this.projectsList=res;
    })
  }

  onEdit(task){
    this.model=new Task();
    this.model=task;
  }

  update(){
    console.log(this.model);
    this.taskService.updateTask(this.model).subscribe(res=>{
      this.tasks=res;
      
      console.log('updated successfully');
      
      this.fetchAll();
    })
  }
  delete(taskId){
    this.taskService.deleteTask(taskId).subscribe(res=>{      
      console.log('deleted successfully');
      this.fetchAll();
    });
  }

  searchTask(item:string){
if(!item)
{
  this.fetchAll();
}
else
{
this.tasks=this.tasks.filter(x=>
  x.taskName.toLowerCase().includes(item.toLowerCase())
);
}

  }
  searchParentTask(item:string){
    if(!item)
    {
      this.fetchAll();
    }
    else
    {
    this.tasks=this.tasks.filter(x=>
      x.parentTask.toLowerCase().includes(item.toLowerCase())
    );
    }
    
      }

     searchPriorityFrom(item:number){
        if(!item)
        {
          this.fetchAll();
        }
        else
        {
        this.tasks=this.tasks.filter(x=>
          x.priority.toString().toLowerCase().includes(item.toString().toLowerCase())
        );
        }
        
          }

          searchPriorityTo(item:number){
            if(!item)
            {
              this.fetchAll();
            }
            else
            {
            this.tasks=this.tasks.filter(x=>
              x.priority.toString().toLowerCase().includes(item.toString().toLowerCase())
            );
            }
            
              }


              searchStartDate(item:Date){
                if(!item)
                {
                  this.fetchAll();
                }
                else
                {
                this.tasks=this.tasks.filter(x=>
                  x.startDate.toString().toLowerCase().includes(item.toString().toLowerCase())
                );
                }
                
              }
                searchEndDate(item:Date){
                  if(!item)
                  {
                    this.fetchAll();
                  }
                  else
                  {
                  this.tasks=this.tasks.filter(x=>
                    x.endDate.toString().toLowerCase().includes(item.toString().toLowerCase())
                  );
                  }
                          
                }}
