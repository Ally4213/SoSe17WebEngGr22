import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {LoginService} from '../services/login.service';

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
  response: object;

    constructor(private router: Router, private loginService: LoginService,) {
    }

  ngDoCheck(){
  this.username=$('#username-input').val();
  this.password=$('#password-input').val();
  
  }
  
    onSubmit(form: NgForm): void {
        //TODO Überprüfen Sie die Login-Daten über die REST-Schnittstelle und leiten Sie den Benutzer bei Erfolg auf die Overview-Seite weiter
      
      // $http.post("http://localhost:8081/login").then(function() {}, function() {});

      //var req = {method:"POST", url:"http://localhost:8081/asdfasdf", headers: {"Content-Type": "application/json"}, data: {username:"huhu", password:"hahaa"}};
      //this.http.post('http://localhost:8081/login').map(response => response.json().data);
        //(req).then(function(r) {}, function(r) {});
       
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
      
      //  this.router.navigate(['/overview']);
    }
}
