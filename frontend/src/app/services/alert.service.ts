// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, signal } from '@angular/core';

// --------------------------------------------------------------------------
// TIPO: Alert
// --------------------------------------------------------------------------
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
  id: number;
  type: AlertType;
  message: string;
}

// --------------------------------------------------------------------------
// SERVICIO: Alert management
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AlertService {
  private _idCounter = 0;
  private readonly _alerts = signal<Alert[]>([]);

  readonly alerts = this._alerts.asReadonly();

  show(type: AlertType, message: string, duration = 4000): void {
    const alert: Alert = { id: ++this._idCounter, type, message };
    this._alerts.update((a) => [...a, alert]);

    setTimeout(() => this.close(alert.id), duration);
  }

  close(id: number): void {
    this._alerts.update((a) => a.filter((al) => al.id !== id));
  }
}
