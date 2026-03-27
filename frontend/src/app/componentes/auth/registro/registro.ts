// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthCardComponent } from '../../shared/auth-card/auth-card';
import { ButtonComponent } from '../../shared/button/button';
import { CampoFormularioComponent } from '../../shared/campo-formulario/campo-formulario';
import { AuthService } from '../../../servicios/auth.service';
import { AuthModalService } from '../../../servicios/auth-modal.service';
import { AlertaService } from '../../../servicios/alerta.service';

// --------------------------------------------------------------------------
// VALIDADOR: Contraseñas coinciden
// --------------------------------------------------------------------------
function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordsMismatch: true };
}

// --------------------------------------------------------------------------
// COMPONENTE: MODAL REGISTRO
// --------------------------------------------------------------------------
@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, AuthCardComponent, ButtonComponent, CampoFormularioComponent],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class RegistroComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly authModal = inject(AuthModalService);
  private readonly alerta = inject(AlertaService);

  protected loading = false;

  protected readonly registroForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordsMatchValidator },
  );

  protected onSubmit(): void {
    if (!this.registroForm.valid || this.loading) return;

    // Validar que las contraseñas coincidan
    if (this.registroForm.hasError('passwordsMismatch')) {
      this.alerta.mostrar('error', 'Las contraseñas no coinciden');
      return;
    }

    this.loading = true;
    const { email, password } = this.registroForm.getRawValue();

    this.authService.register({ email: email!, password: password! }).subscribe({
      next: () => {
        this.alerta.mostrar('success', '¡Cuenta creada correctamente! Ya puedes iniciar sesión');
        this.authModal.abrirLogin();
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        const mensaje = err.error?.error ?? 'No se pudo crear la cuenta. Inténtalo de nuevo';
        this.alerta.mostrar('error', mensaje);
        this.loading = false;
      },
    });
  }
}
