// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, output } from '@angular/core';

// --------------------------------------------------------------------------
// COMPONENTE: FILE PICKER (Selector de archivos reutilizable)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.html',
  styleUrl: './file-picker.scss',
})
export class FilePickerComponent {
  fileSelected = output<File>();

  protected fileName = '';

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.fileName = file.name;
      this.fileSelected.emit(file);
    }
  }
}
