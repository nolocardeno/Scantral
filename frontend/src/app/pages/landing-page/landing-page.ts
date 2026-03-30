// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFileImport,
  faBell,
  faFolderOpen,
  faCalendarPlus,
  faUserGroup,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FeatureCardComponent } from '../../componentes/shared/feature-card/feature-card';
import { AccordionItemComponent } from '../../componentes/shared/accordion-item/accordion-item';
import { ButtonComponent } from '../../componentes/shared/button/button';
import { AuthModalService } from '../../servicios/auth-modal.service';

// --------------------------------------------------------------------------
// INTERFACES
// --------------------------------------------------------------------------
interface Feature {
  icono: IconDefinition;
  texto: string;
  descripcion: string;
}

interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

// --------------------------------------------------------------------------
// PÁGINA: LANDING PAGE
// --------------------------------------------------------------------------
@Component({
  selector: 'app-landing-page',
  imports: [FeatureCardComponent, AccordionItemComponent, ButtonComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPageComponent {
  protected readonly authModal = inject(AuthModalService);

  readonly features: Feature[] = [
    {
      icono: faFileImport,
      texto: 'Escaneo y extracción automática',
      descripcion: 'Sube una imagen de un documento y la aplicación extraerá automáticamente la información relevante para registrarlo de forma rápida.',
    },
    {
      icono: faBell,
      texto: 'Alertas inteligentes de vencimiento',
      descripcion: 'Recibe avisos antes de que un documento, ticket o devolución esté próximo a caducar para no perder fechas importantes.',
    },
    {
      icono: faFolderOpen,
      texto: 'Organización de documentos',
      descripcion: 'Guarda y organiza tus documentos personales y tickets en un único lugar para tener siempre toda tu información localizada.',
    },
    {
      icono: faCalendarPlus,
      texto: 'Exportación a calendarios de terceros',
      descripcion: 'Exporta vencimientos y recordatorios a calendarios externos para tener tus fechas importantes siempre visibles.',
    },
    {
      icono: faUserGroup,
      texto: 'Gestión compartida entre usuarios',
      descripcion: 'Comparte documentos y tickets con otras personas y gestiona información común desde una misma colección.',
    },
    {
      icono: faLaptop,
      texto: 'Acceso desde cualquier lugar',
      descripcion: 'Consulta tus documentos desde cualquier dispositivo a través de la aplicación web, cuando lo necesites.',
    },
  ];

  readonly preguntasFrecuentes: PreguntaFrecuente[] = [
    {
      pregunta: '¿Qué tipo de documentos puede reconocer Scantral?',
      respuesta:
        'Scantral puede reconocer cualquier tipo de documento que tenga una fecha de vencimiento o devolución asociada — desde pasaportes, DNI, carnet de conducir hasta tickets de devoluciones o garantías.',
    },
    {
      pregunta: '¿Recibiré recordatorios antes de que un documento expire?',
      respuesta:
        'Sí. La aplicación te avisará automáticamente antes de que un documento, ticket o devolución esté próximo a caducar, para que puedas actuar con tiempo suficiente. Y puedes elegir por donde recibir estos recordatorios.',
    },
    {
      pregunta: '¿Tengo que introducir toda la información manualmente?',
      respuesta:
        'No necesariamente. Puedes subir una imagen del ticket o documento y la aplicación intentará extraer automáticamente la información relevante. Ponte cómodo, Scantral lo hace por ti.',
    },
    {
      pregunta: '¿Es seguro guardar mis documentos en la aplicación?',
      respuesta:
        'Absolutamente, en Scantral nos aseguramos que tus documentos sigan siendo confidenciales. Cada usuario tiene acceso únicamente a sus propios documentos y la información se gestiona de forma segura dentro del sistema.',
    },
    {
      pregunta: '¿Puedo compartir documentos con otras personas?',
      respuesta:
        'Claro! Puedes organizar documentos y tickets en listas o grupos compartidos con otros usuarios para gestionarlos de forma conjunta. Facilidad en la gestión de documentos para cualquier tipo de grupo.',
    },
  ];
}
