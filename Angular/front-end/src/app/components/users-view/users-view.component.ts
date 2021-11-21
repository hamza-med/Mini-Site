import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  users: User[]=[];

  constructor(private userService: UserService,private router:Router){}
  

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => this.users = data
    );
  }
  handleUpdate(user: User) {
    this.router.navigateByUrl(`/update/${user.id}`);
    
  }
  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe();
    this.router.navigateByUrl('/users');
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
