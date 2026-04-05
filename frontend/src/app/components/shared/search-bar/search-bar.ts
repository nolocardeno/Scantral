import { Component, input, model, output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  imports: [FaIconComponent],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBarComponent {
  placeholder = input<string>('Busca documentos...');
  value = model<string>('');
  searchChange = output<string>();

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected focused = false;

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.searchChange.emit(target.value);
  }

  protected onFocus(): void {
    this.focused = true;
  }

  protected onBlur(): void {
    this.focused = false;
  }
}
