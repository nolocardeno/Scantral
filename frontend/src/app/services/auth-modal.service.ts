// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, signal } from '@angular/core';

// --------------------------------------------------------------------------
// TIPO: Auth modal state
// --------------------------------------------------------------------------
export type AuthModalType = 'login' | 'register' | null;

// --------------------------------------------------------------------------
// SERVICIO: Auth modal control
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AuthModalService {
  private readonly _activeModal = signal<AuthModalType>(null);

  readonly activeModal = this._activeModal.asReadonly();

  openLogin(): void {
    this._activeModal.set('login');
  }

  openRegister(): void {
    this._activeModal.set('register');
  }

  close(): void {
    this._activeModal.set(null);
  }
}
