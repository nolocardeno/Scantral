// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input, signal } from '@angular/core';

// --------------------------------------------------------------------------
// COMPONENTE: ACCORDION ITEM (Reutilizable)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.scss',
})
export class AccordionItemComponent {
  question = input.required<string>();
  open = signal(false);

  toggle(): void {
    this.open.update((v) => !v);
  }
}
