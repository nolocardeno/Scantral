// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentResponse } from '../models/document.model';
import { AuthService } from './auth.service';

// --------------------------------------------------------------------------
// SERVICIO: DOCUMENT
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class DocumentService {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly baseUrl = '/api/documents';

  private get headers(): HttpHeaders {
    const userId = this.authService.user()?.userId ?? 0;
    return new HttpHeaders({ 'X-User-Id': String(userId) });
  }

  getDocuments(): Observable<DocumentResponse[]> {
    return this.http.get<DocumentResponse[]>(this.baseUrl, { headers: this.headers });
  }

  getDocument(id: number): Observable<DocumentResponse> {
    return this.http.get<DocumentResponse>(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
}
