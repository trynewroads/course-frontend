import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDto } from '@tnr/features/auth/dto/login.dto';
import { UserDto } from '@tnr/features/auth/dto/user.dto';
import { ConfirmDialog } from '@tnr/shared/components/confirm-dialog/confirm-dialog';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #http = inject(HttpClient);
  readonly #dialog = inject(MatDialog);
  readonly #router = inject(Router);
  readonly #slug = 'api/auth';

  login(loginDto: LoginDto) {
    this.#http
      .post(`${this.#slug}/login`, loginDto)
      .subscribe(() => this.#router.navigate(['/']));
  }

  me() {
    return this.#http.get<UserDto>(`${this.#slug}/me`);
  }

  logout() {
    this.#dialog
      .open(ConfirmDialog, {
        data: {
          title: 'Cerrar Sesión',
          message: '¿Estás seguro de que quieres cerrar sesión?',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Cerrar Sesión',
        },
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.#http
            .delete(`${this.#slug}/me`, {})
            .subscribe(() => this.#router.navigate(['/auth/login']));
        }
      });
  }
}
