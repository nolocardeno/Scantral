// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthCardComponent } from '../../shared/auth-card/auth-card';
import { ButtonComponent } from '../../shared/button/button';
import { CampoFormularioComponent } from '../../shared/campo-formulario/campo-formulario';
import { CheckboxFormularioComponent } from '../../shared/checkbox-formulario/checkbox-formulario';
import { AuthService } from '../../../servicios/auth.service';
import { AuthModalService } from '../../../servicios/auth-modal.service';
import { AlertaService } from '../../../servicios/alerta.service';

// --------------------------------------------------------------------------
// COMPONENTE: MODAL LOGIN
// --------------------------------------------------------------------------
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    AuthCardComponent,
    ButtonComponent,
    CampoFormularioComponent,
    CheckboxFormularioComponent,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly authModal = inject(AuthModalService);
  private readonly alerta = inject(AlertaService);

  protected loading = false;

  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  protected onSubmit(): void {
    if (!this.loginForm.valid || this.loading) return;

    this.loading = true;
    const { email, password } = this.loginForm.getRawValue();

    this.authService.login({ email: email!, password: password! }).subscribe({
      next: (res) => {
        this.alerta.mostrar('success', `¡Bienvenido, ${res.name}!`);
        this.authModal.cerrar();
        this.router.navigate(['/dashboard']);
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        const mensaje = err.error?.error ?? 'No se pudo iniciar sesión. Inténtalo de nuevo';
        this.alerta.mostrar('error', mensaje);
        this.loading = false;
      },
    });
  }
}
