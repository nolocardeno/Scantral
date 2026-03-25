// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, computed, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faUsers,
  faShieldHalved,
  faSliders,
  faRightFromBracket,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

// --------------------------------------------------------------------------
// TIPO: Variantes del botón de sidebar
// --------------------------------------------------------------------------
export type TipoBotonSidebar =
  | 'Dashboard'
  | 'Grupos'
  | 'Validador'
  | 'Ajustes'
  | 'CerrarSesion';

// --------------------------------------------------------------------------
// MAPAS DE CONFIGURACIÓN
// --------------------------------------------------------------------------
const ETIQUETAS: Record<TipoBotonSidebar, string> = {
  Dashboard: 'Dashboard',
  Grupos: 'Grupos',
  Validador: 'Validador',
  Ajustes: 'Ajustes',
  CerrarSesion: 'Cerrar sesión',
};

const ICONOS: Record<TipoBotonSidebar, IconDefinition> = {
  Dashboard: faHouse,
  Grupos: faUsers,
  Validador: faShieldHalved,
  Ajustes: faSliders,
  CerrarSesion: faRightFromBracket,
};

// --------------------------------------------------------------------------
// COMPONENTE: BOTON DE SIDEBAR
// --------------------------------------------------------------------------
@Component({
  selector: 'app-boton-de-sidebar',
  imports: [FaIconComponent],
  templateUrl: './boton-de-sidebar.html',
  styleUrl: './boton-de-sidebar.scss',
})
export class BotonDeSidebarComponent {
  tipo = input.required<TipoBotonSidebar>();
  activo = input(false);

  protected readonly etiqueta = computed(() => ETIQUETAS[this.tipo()]);
  protected readonly icono = computed(() => ICONOS[this.tipo()]);
}
