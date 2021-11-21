import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  toAddUser: User = new User();
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => this.users = data
    );  
  }
  
  addUser() {
    this.userService.addUser(this.toAddUser).subscribe(
      data => this.users.push(data)
    );
    this.router.navigateByUrl("/users");
    console.log("Success !")
  }
}
