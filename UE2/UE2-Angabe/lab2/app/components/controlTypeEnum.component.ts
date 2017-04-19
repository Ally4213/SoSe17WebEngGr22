import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'my-enum-control',
templateUrl: '../app/views/controlTypeEnum.component.html',

})
export class ControlTypeEnumComponent {
  
  @Input() controlUnit: ControlUnit
  
 }