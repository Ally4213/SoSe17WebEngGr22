import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'my-enum-control',
  templateUrl: '../app/views/controlTypeEnum.component.html',
  styleUrls: [ '../../styles/controlType.css' ],
  styles: [
      `
      .myChartEnum{
          width: 500px !important;
          height: 500px !important;
      }
    `
  ],
})
export class ControlTypeEnumComponent {

  @Input() controlUnit: ControlUnit

  public myChart:Object;

  // PolarArea
  public chartLabels:string[] = ['geschossen','offen','halb geöffnet']
      /** this.controlUnit.values;**/
  public chartData: number[] = [0,0,0];

  public dateTime: String = new Date().toLocaleString();
  public chartLogDate: Array<any> = [this.dateTime];
  public chartLogState: Array<any> = [];


  ngOnInit(): void {
    if (this.controlUnit === undefined) {
      return;
    }
    else {
      if((this.controlUnit.current)>0) {
        this.chartData[1] = 1;
        this.chartLogState.push(this.chartLabels[0]);
      }
      else {
        this.chartData[0] = 1;
        this.chartLogState.push(this.chartLabels[1]);
      }
    }
  }

  ngAfterViewInit():void {
    var ctx = document.getElementById("myChartEnum");
    console.log(ctx);

    this.myChart = new Chart(ctx, {
      type: "polarArea",
      options: {
        animation:{
          animateScale:true
        }
      },
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartData,
          backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
          hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
        }]
      },
    });

  }

  public addEntry(): void {

    var inputval = $("#new-value").val();
    this.controlUnit.current=inputval;

    switch(inputval) {
      case 'offen':
        inputval=1;
        break;
      case 'halb geöffnet':
        inputval=2;
        break;
      default:
        inputval=0;
    }

    this.chartData[inputval] += 1;
    this.chartLogDate.push(this.generateCurrentDateTime());
    this.chartLogState.push(this.controlUnit.current);


    this.myChart.update();

  }

  public generateCurrentDateTime(): string {
    return new Date().toLocaleString();
  }
}

