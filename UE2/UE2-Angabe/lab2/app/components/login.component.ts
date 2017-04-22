import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-login',
  templateUrl: '../app/views/login.component.html',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  formData = { "username": "", "password": ""}

  submitFormData(){
    if(this.loginForm.valid){
      console.log(this.formData);
    }
  }

}