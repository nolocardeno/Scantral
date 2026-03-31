// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, input, output } from '@angular/core';
import { SidebarButtonComponent } from '../../shared/sidebar-button/sidebar-button';

// --------------------------------------------------------------------------
// TIPO: Navigation pages
// --------------------------------------------------------------------------
export type SidebarPage =
  | 'Dashboard'
  | 'Groups'
  | 'Validator'
  | 'Settings'
  | 'Default';

// --------------------------------------------------------------------------
// COMPONENTE: SIDEBAR
// --------------------------------------------------------------------------
@Component({
  selector: 'app-sidebar',
  imports: [SidebarButtonComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  currentPage = input<SidebarPage>('Default');
  onNavigate = output<string>();

  navigate(page: string): void {
    this.onNavigate.emit(page);
  }
}
