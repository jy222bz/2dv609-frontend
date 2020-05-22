import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  working = false;
  form: FormGroup;
  error = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['test', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  login() {
    if (this.form && !this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return false;
    }
    this.authService.login(this.form.value).subscribe(
      (next) => {
        console.log(next)
        this.authService.currentUser = {

        }
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        console.log(error)
      }
    )
  }


}


