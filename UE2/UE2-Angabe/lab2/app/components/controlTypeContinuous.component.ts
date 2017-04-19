import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'my-continuous-control',
  templateUrl: '../app/views/controlTypeContinuous.component.html',
})
export class ControlTypeContinuousComponent {
  
  @Input() controlUnit: ControlUnit
 }