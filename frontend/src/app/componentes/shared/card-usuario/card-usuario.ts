// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input } from '@angular/core';

// --------------------------------------------------------------------------
// COMPONENTE: CARD USUARIO (Foto de perfil + nombre + subtítulo)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.html',
  styleUrl: './card-usuario.scss',
})
export class CardUsuarioComponent {
  username = input.required<string>();
  subtitle = input<string>('');
  photoUrl = input<string>('');
}
