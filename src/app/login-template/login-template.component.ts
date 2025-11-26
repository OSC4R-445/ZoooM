import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss'],
  standalone: false
})
export class LoginTemplateComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      email: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]]
    });
  }

  // Getters para acceder fácilmente a los controles del formulario
  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      alert('Formulario enviado correctamente');
      this.loginForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }
}