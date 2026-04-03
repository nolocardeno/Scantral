// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth.service';

// --------------------------------------------------------------------------
// INTERFACES
// --------------------------------------------------------------------------
export interface UpdateUserRequest {
  name?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
}

// --------------------------------------------------------------------------
// SERVICIO: USER
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/users';

  // TODO: get userId from auth system (Sprint 5). Temporary: userId = 3
  private readonly headers = new HttpHeaders({ 'X-User-Id': '3' });

  getUser(userId: number): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.baseUrl}/${userId}`, { headers: this.headers });
  }

  updateUser(userId: number, request: UpdateUserRequest): Observable<AuthResponse> {
    return this.http.patch<AuthResponse>(`${this.baseUrl}/${userId}`, request, { headers: this.headers });
  }

  uploadProfileImage(userId: number, file: File): Observable<AuthResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<AuthResponse>(`${this.baseUrl}/${userId}/profile-image`, formData, {
      headers: this.headers,
    });
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`, { headers: this.headers });
  }
}
