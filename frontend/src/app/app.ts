// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { HeaderComponent } from './componentes/layout/header/header';
import { FooterComponent } from './componentes/layout/footer/footer';
import { LoginComponent } from './componentes/auth/login/login';
import { RegistroComponent } from './componentes/auth/registro/registro';
import { AuthModalService } from './servicios/auth-modal.service';
import { AlertasComponent } from './componentes/shared/alertas/alertas';

// --------------------------------------------------------------------------
// RUTAS QUE USAN LAYOUT CON SIDEBAR
// --------------------------------------------------------------------------
const RUTAS_CON_SIDEBAR = ['/dashboard'];

// --------------------------------------------------------------------------
// COMPONENTE: APP (ROOT)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    AlertasComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  protected readonly authModal = inject(AuthModalService);

  protected readonly footerVariante = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) =>
        RUTAS_CON_SIDEBAR.some((ruta) => e.urlAfterRedirects.startsWith(ruta))
          ? ('con-sidebar' as const)
          : ('default' as const),
      ),
    ),
    { initialValue: 'default' as const },
  );
}
