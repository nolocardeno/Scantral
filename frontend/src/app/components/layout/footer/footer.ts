// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

// --------------------------------------------------------------------------
// COMPONENTE: FOOTER
// --------------------------------------------------------------------------
@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  variant = input<'default' | 'with-sidebar'>('default');
  readonly currentYear = new Date().getFullYear();

  // --- Iconos Font Awesome (solo los necesarios) ---
  readonly faGithub = faGithub;
  readonly faLinkedinIn = faLinkedinIn;
  readonly faInstagram = faInstagram;
  readonly faXTwitter = faXTwitter;
}
