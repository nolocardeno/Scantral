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
  icon = input.required<IconDefinition>();
  text = input.required<string>();
  description = input.required<string>();
  flipped = signal(false);

  toggle(): void {
    this.flipped.update((v) => !v);
  }
}
