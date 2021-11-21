import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/shared/password-validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public msg: string = '';
  signUpFormGroup: any;
  get password() {
    return this.signUpFormGroup.get('password');
  }
  get email() {
    return this.signUpFormGroup.get('email');
  }
  get confirmPassword() {
    return this.signUpFormGroup.get('confirmPassword');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpFormGroup = this.formBuilder.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: ['', [Validators.required]],
        confirmPassword: [''],
      },
      { validator: PasswordValidator }
    );
  }
  onSubmit() {
    console.log(this.signUpFormGroup.value);
    if (this.signUpFormGroup.valid) {
      console.log('form is valid');
    }
  }
  handleMessage() {
    if (this.signUpFormGroup.valid) {
      this.msg = 'Submitted successfuly !';
    }
  }
}
