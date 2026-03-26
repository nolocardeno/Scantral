// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// --------------------------------------------------------------------------
// INTERFACES
// --------------------------------------------------------------------------
export interface AuthResponse {
  userId: number;
  email: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

// --------------------------------------------------------------------------
// SERVICIO: AUTH (HTTP + Estado de sesión)
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/auth';

  private readonly _usuario = signal<AuthResponse | null>(null);

  readonly usuario = this._usuario.asReadonly();
  readonly estaLogueado = computed(() => this._usuario() !== null);

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, request);
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request).pipe(
      tap((res) => this._usuario.set(res)),
    );
  }

  logout(): void {
    this._usuario.set(null);
  }
}
