import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/store/auth/auth.actions';


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
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  async login() {
    if (this.form && !this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return false;
    }
    this.store.dispatch(new Login(this.form.value)).subscribe(
      (_next) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.error = error.error.description;
      }
    )
  }
}


