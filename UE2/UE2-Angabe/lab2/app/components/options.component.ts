import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-options',
  templateUrl: '../app/views/options.component.html',
})
export class OptionsComponent {

  @ViewChild('changePasswordForm') changePasswordForm: NgForm;

  ChangePassword = { "oldpw": "", "newpw1": "", "newpw2": ""}



  submitFormData(){

    if(this.changePasswordForm.valid){
      this.changePasswordForm.reset();
      alert("Change was submitted.");
    }

  }

}