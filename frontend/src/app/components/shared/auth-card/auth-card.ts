// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, HostListener, inject, input, output } from '@angular/core';
import { AuthModalService } from '../../../services/auth-modal.service';

// --------------------------------------------------------------------------
// COMPONENTE: AUTH CARD (Modal con backdrop para autenticación)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.html',
  styleUrl: './auth-card.scss',
})
export class AuthCardComponent {
  private readonly authModal = inject(AuthModalService);

  title = input.required<string>();
  closed = output<void>();

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.close();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  private close(): void {
    this.authModal.close();
    this.closed.emit();
  }
}
