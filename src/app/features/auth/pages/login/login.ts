import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { createLoginForm } from '../../utils/auth-forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  readonly #authService = inject(AuthService);

  loginForm = createLoginForm()

  login() {}

}
