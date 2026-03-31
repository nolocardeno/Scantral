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
// TIPO: Sidebar button variants
// --------------------------------------------------------------------------
export type SidebarButtonType =
  | 'Dashboard'
  | 'Groups'
  | 'Validator'
  | 'Settings'
  | 'Logout';

// --------------------------------------------------------------------------
// CONFIGURATION MAPS
// --------------------------------------------------------------------------
const LABELS: Record<SidebarButtonType, string> = {
  Dashboard: 'Dashboard',
  Groups: 'Grupos',
  Validator: 'Validador',
  Settings: 'Ajustes',
  Logout: 'Cerrar sesión',
};

const ICONS: Record<SidebarButtonType, IconDefinition> = {
  Dashboard: faHouse,
  Groups: faUsers,
  Validator: faShieldHalved,
  Settings: faSliders,
  Logout: faRightFromBracket,
};

// --------------------------------------------------------------------------
// COMPONENTE: SIDEBAR BUTTON
// --------------------------------------------------------------------------
@Component({
  selector: 'app-sidebar-button',
  imports: [FaIconComponent],
  templateUrl: './sidebar-button.html',
  styleUrl: './sidebar-button.scss',
})
export class SidebarButtonComponent {
  type = input.required<SidebarButtonType>();
  active = input(false);

  protected readonly label = computed(() => LABELS[this.type()]);
  protected readonly icon = computed(() => ICONS[this.type()]);
}
