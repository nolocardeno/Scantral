// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Injectable, signal } from '@angular/core';

// --------------------------------------------------------------------------
// TIPO: Alerta
// --------------------------------------------------------------------------
export type AlertaTipo = 'success' | 'error' | 'warning' | 'info';

export interface Alerta {
  id: number;
  tipo: AlertaTipo;
  mensaje: string;
}

// --------------------------------------------------------------------------
// SERVICIO: Gestión de alertas/notificaciones
// --------------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class AlertaService {
  private _idCounter = 0;
  private readonly _alertas = signal<Alerta[]>([]);

  readonly alertas = this._alertas.asReadonly();

  mostrar(tipo: AlertaTipo, mensaje: string, duracion = 4000): void {
    const alerta: Alerta = { id: ++this._idCounter, tipo, mensaje };
    this._alertas.update((a) => [...a, alerta]);

    setTimeout(() => this.cerrar(alerta.id), duracion);
  }

  cerrar(id: number): void {
    this._alertas.update((a) => a.filter((al) => al.id !== id));
  }
}
