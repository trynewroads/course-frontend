import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '@tnr/features/auth/services/auth.service';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  selector: 'app-toolbar',
  imports: [MatIcon, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  readonly #authService = inject(AuthService);

  me = derivedAsync(() => this.#authService.me());

  onLogout() {
    this.#authService.logout();
  }
}
