// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, effect, input, output, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FilePickerComponent } from '../../shared/file-picker/file-picker';

// --------------------------------------------------------------------------
// COMPONENTE: AVATAR UPLOAD CARD (Cambio de imagen de usuario)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-avatar-upload-card',
  imports: [FilePickerComponent, FaIconComponent],
  templateUrl: './avatar-upload-card.html',
  styleUrl: './avatar-upload-card.scss',
})
export class AvatarUploadCardComponent {
  imageUrl = input('');

  fileSelected = output<File>();

  protected readonly faUser = faUser;
  protected readonly imageError = signal(false);

  constructor() {
    effect(() => {
      this.imageUrl();
      this.imageError.set(false);
    });
  }

  protected onImageError(): void {
    this.imageError.set(true);
  }
}
