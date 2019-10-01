import { DatePipe } from '@angular/common';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { User } from './user';

export class Project{

    projectId:number
    projectName:string
    startDate:Date
    endDate:Date
    priority:number
    user:User
    noOfTasks:number
}