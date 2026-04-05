// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, inject, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent, type SidebarPage } from '../../components/layout/sidebar/sidebar';
import { PageHeaderComponent } from '../../components/shared/page-header/page-header';
import { FormFieldComponent } from '../../components/shared/form-field/form-field';
import { ButtonComponent } from '../../components/shared/button/button';
import { AvatarUploadCardComponent } from '../../components/shared/avatar-upload-card/avatar-upload-card';
import { DeleteAccountCardComponent } from '../../components/shared/delete-account-card/delete-account-card';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

// --------------------------------------------------------------------------
// PÁGINA: AJUSTES DE USUARIO
// --------------------------------------------------------------------------
@Component({
  selector: 'app-settings',
  imports: [
    SidebarComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    FormFieldComponent,
    ButtonComponent,
    AvatarUploadCardComponent,
    DeleteAccountCardComponent,
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  protected readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);
  private readonly alertService = inject(AlertService);
  private readonly router = inject(Router);

  protected readonly currentPage = signal<SidebarPage>('Settings');

  protected readonly settingsForm = this.fb.group({
    email: ['', [Validators.email]],
    name: [''],
    password: [''],
    newPassword: [''],
  });

  ngOnInit(): void {
    this.loadUserData();
  }

  onNavigate(page: string): void {
    if (page === 'Logout') {
      this.authService.logout();
      this.router.navigate(['/']);
      return;
    }

    if (page === 'Dashboard') {
      this.router.navigate(['/dashboard']);
      return;
    }

    if (page === 'Settings') {
      return;
    }

    this.router.navigate(['/' + page.toLowerCase()]);
  }

  protected onSubmit(): void {
    if (!this.settingsForm.valid) return;

    const { email, name, password, newPassword } = this.settingsForm.getRawValue();

    const user = this.authService.user();
    if (!user) return;

    this.userService.updateUser(user.userId, {
      name: name || undefined,
      email: email || undefined,
      currentPassword: password || undefined,
      newPassword: newPassword || undefined,
    }).subscribe({
      next: (res) => {
        this.authService.setUser(res);
        this.alertService.show('success', 'Datos actualizados correctamente');
        this.settingsForm.patchValue({ password: '', newPassword: '' });
      },
      error: (err) => {
        const message = err.error?.error || 'Error al actualizar los datos';
        this.alertService.show('error', message);
      },
    });
  }

  protected onProfileImageSelected(file: File): void {
    const user = this.authService.user();
    if (!user) return;

    this.userService.uploadProfileImage(user.userId, file).subscribe({
      next: (res) => {
        this.authService.setUser(res);
        this.alertService.show('success', 'Imagen de perfil actualizada');
      },
      error: () => {
        this.alertService.show('error', 'Error al subir la imagen');
      },
    });
  }

  protected onDeleteAccount(): void {
    const user = this.authService.user();
    if (!user) return;

    this.userService.deleteUser(user.userId).subscribe({
      next: () => {
        this.authService.logout();
        this.alertService.show('success', 'Cuenta eliminada correctamente');
        this.router.navigate(['/']);
      },
      error: () => {
        this.alertService.show('error', 'Error al eliminar la cuenta');
      },
    });
  }

  private loadUserData(): void {
    const user = this.authService.user();
    if (!user) return;

    this.userService.getUser(user.userId).subscribe({
      next: (res) => {
        this.settingsForm.patchValue({ email: res.email, name: res.name });
        this.authService.setUser(res);
      },
    });
  }
}
