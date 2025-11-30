import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss'],
  standalone: false
})
export class PreferenciasComponent {
  preferenciasForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.preferenciasForm = this.fb.group({
      preferencias: this.fb.array([])
    });
    
    this.agregarPreferencia();
  }

  get preferenciasArray(): FormArray {
    return this.preferenciasForm.get('preferencias') as FormArray;
  }

  agregarPreferencia(): void {
    this.preferenciasArray.push(this.fb.control('', Validators.required));
  }

  eliminarPreferencia(index: number): void {
    this.preferenciasArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.preferenciasForm.valid) {
      console.log('Preferencias:', this.preferenciasForm.value);
      alert('Preferencias guardadas correctamente!');
    } else {
      alert('Por favor, completa todas las preferencias');
    }
  }
}