import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-boolean-control',
  templateUrl: '../app/views/controlTypeBoolean.component.html',
  styles: [
      `   #myChartBoolean{
          width:600px !important;
          height:600px !important;
          
      }
      .log{
          float: left;
          width:45%;
          margin-left:2.5% !important;
          margin-right:2.5% !important;
          margin-bottom: 10px;
          border: 1px dotted black;
          height: 180px;
      }
      .description{
          float: right;
          width:45%;
          text-align: left;
          margin-left:1.5% !important;
          margin-right:2.5% !important;

      }
    `
  ],
})
export class ControlTypeBooleanComponent {

  @Input() controlUnit: ControlUnit

  public myChartBoolean:Object;

  // Doughnut
  public doughnutChartLabels:string[] = ['Aus', 'An'];
  public doughnutChartData: number[] = [0,0];

  public dateTime: String = new Date().toLocaleString();
  public doughnutChartLogDate: Array<any> = [this.dateTime];
  public doughnutChartLogState: Array<any> = [];

  ngOnInit(): void {
    if (this.controlUnit === undefined) {
      return;
    }
    else {
      if((this.controlUnit.current)>0) {
        this.doughnutChartData[1] = 1;
        this.doughnutChartLogState.push(this.doughnutChartLabels[0]);
      }
      else {
        this.doughnutChartData[0] = 1;
        this.doughnutChartLogState.push(this.doughnutChartLabels[1]);
      }
    }
  }

  ngAfterViewInit():void {
    var ctx = document.getElementById("myChartBoolean");
    console.log(ctx);

    this.myChartBoolean = new Chart(ctx, {
      type: "doughnut",
      options: {
        animation:{
          animateScale:true
        }
      },
      data: {
        labels: this.doughnutChartLabels,
        datasets: [{
          data: this.doughnutChartData,
          backgroundColor: ["#FF6384","#36A2EB"],
          hoverBackgroundColor: ["#FF6384","#36A2EB"]
        }]
      },
    });

  }

  public addEntry(): void {
    //load input value
    var inputval = $("#new-value").prop("checked");

    var lamp_state : number;

    if(inputval) {
      lamp_state = 1;
    }
    else {
      lamp_state=0;
    }

    if(this.controlUnit.current != lamp_state) {
      this.controlUnit.current = lamp_state;
      this.doughnutChartData[this.controlUnit.current] += 1;
      this.doughnutChartLogDate.push(this.generateCurrentDateTime());
      this.doughnutChartLogState.push(this.doughnutChartLabels[this.controlUnit.current]);
      this.myChartBoolean.update();
    }

  }

  public generateCurrentDateTime(): string {
    return new Date().toLocaleString();
  }

}