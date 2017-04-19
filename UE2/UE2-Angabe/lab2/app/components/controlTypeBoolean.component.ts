import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'my-boolean-control',
  templateUrl: '../app/views/controlTypeBoolean.component.html',
})
export class ControlTypeBooleanComponent {

  @Input() controlUnit: ControlUnit
}