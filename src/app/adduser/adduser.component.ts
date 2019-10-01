import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { isObject } from 'util';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[UserService]
})
export class AdduserComponent implements OnInit {


  
  constructor(private userService:UserService) { }
  user:User=new User();
  users:any
  searchItem:any

  ngOnInit() {
   this.user=new User();
    this.fetch();
    }
    fetch(){
      this.userService.getAllUsers().subscribe(res=>{
        this.users=res;
        console.log(res)

    }
   )
  }

  createUser(){
    this.userService.viewAllUsers(this.user).subscribe(
      res=>{
        console.log('Created successfully');
        console.log(this.user);
        this.user=new User();
          }
    )
  }
update(){
  console.log(this.users);
  this.userService.updateUser(this.user).subscribe(
    res=>{
    this.user=res;

    this.fetch();
    }
)
  }

  delete(userId){
    this.userService.deleteUser(userId).subscribe(
      res=>{
       console.log('deleted successfully')
       this.fetch();
      }
    )

  }
  search(item:String){
    if(!item){
      this.users=this.fetch();
    }else{
      this.users=this.users.filter(x=>
        x.firstName.trim().toLowerCase().includes(item.trim().toLowerCase())||
        x.lastName.trim().toLowerCase().includes(item.trim().toLowerCase())||
        x.employee_id.toString().toLowerCase().includes(item.trim().toLowerCase())
        );


    }

  }
  onEdit(usersss){
    this.user=new User();
      this.user=usersss;
  }
}