import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';



const routes: Routes = [{
  path:'addTask',
  component:AddtaskComponent
},
  {
    path:'viewTask',
    component:ViewtaskComponent
  },


{
    path:'addUser',
    component:AdduserComponent
},
{
  path:'addProject',
  component:AddprojectComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[AddtaskComponent,ViewtaskComponent,AdduserComponent,AddprojectComponent]
