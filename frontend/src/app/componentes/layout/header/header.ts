// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button';

// --------------------------------------------------------------------------
// COMPONENTE: HEADER
// --------------------------------------------------------------------------
@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {}
