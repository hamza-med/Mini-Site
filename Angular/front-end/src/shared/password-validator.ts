import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl):{[key:string]:any} | null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(password?.pristine || confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value!==confirmPassword.value ?
    {'misMatch':true}:null;
}
//one line conditional exp let res = (1 > 3) ? "is greater" : "is less than";// "is less than
//:{[key:string]:any} | null is the return type of the function it returns either of the two 
//this function accepts FormGroup as parameter "control"