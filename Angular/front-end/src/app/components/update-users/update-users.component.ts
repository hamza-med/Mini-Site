import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  selectedUser: User = new User; 

  ngOnInit(): void {
    const userId = + Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getOneUser(userId).subscribe(
      data => this.selectedUser = data
    );
  }

  updateUser() {
    this.userService.UpdateUser(this.selectedUser).subscribe(
      data => this.selectedUser = data
    );
    this.router.navigateByUrl("/users");
    console.log("Success !")
  }

}
