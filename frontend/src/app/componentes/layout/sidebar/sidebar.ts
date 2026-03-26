// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input, output } from '@angular/core';
import { BotonDeSidebarComponent } from '../../shared/boton-de-sidebar/boton-de-sidebar';

// --------------------------------------------------------------------------
// TIPO: Páginas de navegación
// --------------------------------------------------------------------------
export type PaginaSidebar =
  | 'Dashboard'
  | 'Grupos'
  | 'Validador'
  | 'Ajustes'
  | 'Predeterminado';

// --------------------------------------------------------------------------
// COMPONENTE: SIDEBAR
// --------------------------------------------------------------------------
@Component({
  selector: 'app-sidebar',
  imports: [BotonDeSidebarComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  paginaActual = input<PaginaSidebar>('Predeterminado');
  onNavegar = output<string>();

  navegar(pagina: string): void {
    this.onNavegar.emit(pagina);
  }
}
