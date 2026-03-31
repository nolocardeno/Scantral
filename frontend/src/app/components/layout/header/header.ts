// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button';
import { UserCardComponent } from '../../shared/user-card/user-card';
import { AuthModalService } from '../../../services/auth-modal.service';
import { AuthService } from '../../../services/auth.service';

// --------------------------------------------------------------------------
// COMPONENTE: HEADER
// --------------------------------------------------------------------------
@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonComponent, UserCardComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected readonly authModal = inject(AuthModalService);
  protected readonly authService = inject(AuthService);
}
