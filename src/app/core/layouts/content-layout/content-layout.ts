import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from '@tnr/core/components/toolbar/toolbar';
import { Logo } from '@tnr/shared/components/logo/logo';

@Component({
  selector: 'app-content-layout',
  imports: [RouterOutlet, Toolbar, Logo],
  templateUrl: './content-layout.html',
  styleUrl: './content-layout.scss',
})
export class ContentLayout {}
