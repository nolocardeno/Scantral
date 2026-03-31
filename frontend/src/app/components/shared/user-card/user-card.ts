// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input } from '@angular/core';

// --------------------------------------------------------------------------
// COMPONENTE: USER CARD (Profile photo + name + subtitle)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCardComponent {
  username = input.required<string>();
  subtitle = input<string>('');
  photoUrl = input<string>('');
}
