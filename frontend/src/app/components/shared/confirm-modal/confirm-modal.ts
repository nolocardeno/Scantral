// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, HostListener, input, output } from '@angular/core';
import { ButtonComponent } from '../button/button';

// --------------------------------------------------------------------------
// COMPONENTE: CONFIRM MODAL (Modal de confirmación reutilizable)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-confirm-modal',
  imports: [ButtonComponent],
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.scss',
})
export class ConfirmModalComponent {
  title = input.required<string>();
  message = input.required<string>();
  confirmLabel = input('Confirmar');
  cancelLabel = input('Cancelar');

  confirmed = output<void>();
  cancelled = output<void>();

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.cancelled.emit();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.cancelled.emit();
    }
  }
}
