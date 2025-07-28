import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  altLogo = input<boolean>(false);

  logo = computed(() =>
    this.altLogo() ? 'images/logo-alt.svg' : 'images/logo.svg',
  );
}
