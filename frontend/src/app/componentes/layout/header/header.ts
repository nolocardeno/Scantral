// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button';
import { CardUsuarioComponent } from '../../shared/card-usuario/card-usuario';
import { AuthModalService } from '../../../servicios/auth-modal.service';
import { AuthService } from '../../../servicios/auth.service';

// --------------------------------------------------------------------------
// COMPONENTE: HEADER
// --------------------------------------------------------------------------
@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent, CardUsuarioComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected readonly authModal = inject(AuthModalService);
  protected readonly authService = inject(AuthService);
}
