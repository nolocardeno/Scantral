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
  pregunta = input.required<string>();
  abierto = signal(false);

  toggle(): void {
    this.abierto.update((v) => !v);
  }
}
