// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// --------------------------------------------------------------------------
// COMPONENTE: FEATURE CARD (Reutilizable)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-feature-card',
  imports: [FaIconComponent],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCardComponent {
  icono = input.required<IconDefinition>();
  texto = input.required<string>();
  descripcion = input.required<string>();
  volteada = signal(false);

  toggle(): void {
    this.volteada.update((v) => !v);
  }
}
