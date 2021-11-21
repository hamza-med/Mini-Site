import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: any;

  get password() {
    return this.loginFormGroup.get('password');
  }
  get email() {
    return this.loginFormGroup.get('email');
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Handling the submit button');
    console.log(this.loginFormGroup.value);
    if (this.loginFormGroup.valid) {
      this.router.navigateByUrl('/users');
    }
  }
}
