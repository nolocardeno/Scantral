// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, output } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal';

// --------------------------------------------------------------------------
// COMPONENTE: DELETE ACCOUNT CARD (Card + modal de confirmación)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-delete-account-card',
  imports: [ButtonComponent, ConfirmModalComponent],
  templateUrl: './delete-account-card.html',
  styleUrl: './delete-account-card.scss',
})
export class DeleteAccountCardComponent {
  protected showConfirm = false;

  deleteConfirmed = output<void>();

  protected openConfirm(): void {
    this.showConfirm = true;
  }

  protected onConfirm(): void {
    this.showConfirm = false;
    this.deleteConfirmed.emit();
  }

  protected onCancel(): void {
    this.showConfirm = false;
  }
}
