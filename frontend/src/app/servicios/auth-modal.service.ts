// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, signal } from '@angular/core';

// --------------------------------------------------------------------------
// TIPO: Estado del modal de autenticación
// --------------------------------------------------------------------------
export type AuthModalTipo = 'login' | 'registro' | null;

// --------------------------------------------------------------------------
// SERVICIO: Control de modales de autenticación
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AuthModalService {
  private readonly _modalActivo = signal<AuthModalTipo>(null);

  readonly modalActivo = this._modalActivo.asReadonly();

  abrirLogin(): void {
    this._modalActivo.set('login');
  }

  abrirRegistro(): void {
    this._modalActivo.set('registro');
  }

  cerrar(): void {
    this._modalActivo.set(null);
  }
}
