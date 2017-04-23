import { Component, Input, OnInit } from '@angular/core';
import { ControlUnit } from '../model/controlUnit';

@Component({
  selector: 'my-continuous-form',
  templateUrl: '../app/views/continuous-form.component.html'
})
export class ContinuousFormComponent {

  @Input() controlUnit: ControlUnit

  public getCurrentEntry() : number{
  console.log("in form function return current entry");  
  return this.controlUnit.current;
  }

public addEntry(number:number): number{
  console.log("in form function add entry");
  this.controlUnit.current=number;
  return number;
  
}

}