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
  
    // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}