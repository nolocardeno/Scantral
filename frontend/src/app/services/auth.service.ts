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
  profileImagePath: string | null;
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
// SERVICIO: AUTH (HTTP + Session state)
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/auth';
  private readonly STORAGE_KEY = 'scantral_user';

  private readonly _user = signal<AuthResponse | null>(this.loadUser());
  private readonly _imageVersion = signal(Date.now());

  readonly user = this._user.asReadonly();
  readonly isLoggedIn = computed(() => this._user() !== null);
  readonly profileImageUrl = computed(() => {
    const user = this._user();
    if (!user?.profileImagePath) return '';
    const v = this._imageVersion();
    return `/api/users/${user.userId}/profile-image?v=${v}`;
  });

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, request);
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request).pipe(
      tap((res) => this.setUser(res)),
    );
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  setUser(user: AuthResponse): void {
    this._user.set(user);
    this._imageVersion.set(Date.now());
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  private loadUser(): AuthResponse | null {
    const raw = localStorage.getItem('scantral_user');
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthResponse;
    } catch {
      return null;
    }
  }
}
