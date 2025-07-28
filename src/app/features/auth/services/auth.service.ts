import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '@tnr/features/auth/dto/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #http = inject(HttpClient);
  readonly #router = inject(Router);
  readonly #slug = 'api/auth';

  login(loginDto: LoginDto) {
    this.#http
      .post(`${this.#slug}/login`, loginDto)
      .subscribe(() => this.#router.navigate(['/']));
  }

  me() {
    return this.#http.get(`${this.#slug}/me`);
  }

  logout() {
    return this.#http.delete(`${this.#slug}/me`, {});
  }
}
