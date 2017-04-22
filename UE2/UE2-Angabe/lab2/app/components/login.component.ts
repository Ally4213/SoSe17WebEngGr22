import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'my-login',
  templateUrl: '../app/views/login.component.html',
})
export class LoginComponent {

  LogIn = { "username": "", "password": ""}

}