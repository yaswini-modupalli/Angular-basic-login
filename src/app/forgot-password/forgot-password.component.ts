import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotMailForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ){}
    
  get formControls() { 
    return this.forgotMailForm.controls;
  }

  ngOnInit() {
    this.forgotMailForm = this.formBuilder.group({
      email: ['', Validators.required ]
    });
  }

  forgotMail() {
    return this.authService.ForgotPassword(this.forgotMailForm.value.email);
  }
}
