import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {LoginService} from '../services/login.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: '../views/login.html'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  formData = { "username": "", "password":""};
    loginError: boolean = false;
  username: string ="";
  password: string="";
  response: any;

    constructor(private router: Router, private loginService: LoginService,) {
    }

  ngDoCheck(){
  this.username=$('#username-input').val();
  this.password=$('#password-input').val();
  
  }
  
    onSubmit(form: NgForm): void {
       
        this.loginService.login(this.username, this.password)
            .subscribe(data => {this.response = data;
            console.log(this.response)
            if(data.success===true){
            this.router.navigate(['/overview']);
            }
              else{
            alert(data.message);
              console.log(data.message);
            }
            });
      
    }
}
