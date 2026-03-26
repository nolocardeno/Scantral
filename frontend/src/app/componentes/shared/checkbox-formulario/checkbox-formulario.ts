// --------------------------------------------------------------------------
// IMPORTS
// --------------------------------------------------------------------------
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// --------------------------------------------------------------------------
// COMPONENTE: CHECKBOX FORMULARIO (Reutilizable con ControlValueAccessor)
// --------------------------------------------------------------------------
@Component({
  selector: 'app-checkbox-formulario',
  imports: [FaIconComponent],
  templateUrl: './checkbox-formulario.html',
  styleUrl: './checkbox-formulario.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxFormularioComponent),
      multi: true,
    },
  ],
})
export class CheckboxFormularioComponent implements ControlValueAccessor {
  label = input.required<string>();
  checkboxId = input.required<string>();

  protected readonly faCheck = faCheck;

  protected checked = false;
  protected disabled = false;

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.checked = value ?? false;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
