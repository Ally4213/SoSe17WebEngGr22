import { Component, OnInit, ViewChild } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import {LoginService} from '../services/login.service';
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'my-options',
  templateUrl: '../views/options.html'
})
export class OptionsComponent implements OnInit {
  @ViewChild('optionsForm') optionsForm: NgForm;
  updateError: boolean;
  oldPW: string;
  newPW: string;
  response: object;

  constructor(private http: Http, private loginService: LoginService) {
  };

  ngOnInit(): void {
    this.updateError = false;
  }

  ngDoCheck() {
    this.oldPW = $('#old-password-input').val();
    this.newPW = $('#new-password-input').val();

  }

  public equalsPW(form: NgForm): boolean {
    if (!form || !form.value || !form.value["repeat-password"] || !form.value["new-password"]) {
      return false;
    }
    return form.value["repeat-password"] === form.value["new-password"];
  }


  /**
   * Liest das alte Passwort, das neue Passwort und dessen Wiederholung ein und übertraegt diese an die REST-Schnittstelle
   * @param form
   */
  onSubmit(form: NgForm): void {

    this.loginService.changePW(this.oldPW, this.newPW)
      .subscribe(data => {
      this.response = data;
        console.log(this.response)
        if (data.success === true) {
          alert(data.message);
        }
        else {
          alert(data.message);
        }
      });
    if (!form) {
      return;
    }
    form.resetForm();

  }

}
