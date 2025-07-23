import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  readonly #authService = inject(AuthService);
  readonly #fb = inject(FormBuilder);

  loginForm = this.#fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {}

}
