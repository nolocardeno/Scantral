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
import { FormFieldComponent } from '../../shared/form-field/form-field';
import { AuthService } from '../../../services/auth.service';
import { AuthModalService } from '../../../services/auth-modal.service';
import { AlertService } from '../../../services/alert.service';

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
  selector: 'app-register',
  imports: [ReactiveFormsModule, AuthCardComponent, ButtonComponent, FormFieldComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly authModal = inject(AuthModalService);
  private readonly alert = inject(AlertService);

  protected loading = false;

  protected readonly registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordsMatchValidator },
  );

  protected onSubmit(): void {
    if (!this.registerForm.valid || this.loading) return;

    // Validar que las contraseñas coincidan
    if (this.registerForm.hasError('passwordsMismatch')) {
      this.alert.show('error', 'Las contraseñas no coinciden');
      return;
    }

    this.loading = true;
    const { email, password } = this.registerForm.getRawValue();

    this.authService.register({ email: email!, password: password! }).subscribe({
      next: () => {
        this.alert.show('success', '¡Cuenta creada correctamente! Ya puedes iniciar sesión');
        this.authModal.openLogin();
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        const mensaje = err.error?.error ?? 'No se pudo crear la cuenta. Inténtalo de nuevo';
        this.alert.show('error', mensaje);
        this.loading = false;
      },
    });
  }
}
