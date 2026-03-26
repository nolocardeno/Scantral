// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { AlertaService } from '../../../servicios/alerta.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
  faCircleInfo,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

// --------------------------------------------------------------------------
// COMPONENTE: CONTENEDOR DE ALERTAS
// --------------------------------------------------------------------------
@Component({
  selector: 'app-alertas',
  imports: [FaIconComponent],
  templateUrl: './alertas.html',
  styleUrl: './alertas.scss',
})
export class AlertasComponent {
  protected readonly alertaService = inject(AlertaService);

  protected readonly iconos = {
    success: faCircleCheck,
    error: faCircleXmark,
    warning: faTriangleExclamation,
    info: faCircleInfo,
  };

  protected readonly faXmark = faXmark;
}
