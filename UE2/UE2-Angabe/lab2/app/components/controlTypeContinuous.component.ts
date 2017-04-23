import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-continuous-control',
  templateUrl: '../app/views/controlTypeContinuous.component.html',
  styleUrls: [ '../../styles/controlType.css' ],
  styles: [
    `
    .myChartContinuous{
      width:600px !important;
      height:300px !important;
    }
  `
  ],
})
export class ControlTypeContinuousComponent {

  @Input() controlUnit: ControlUnit

  // lineChart
  public lineChartData: Array<any> = [
    { data: [], label: 'Verlauf' },
  ];
  
  public myChart:Object;

  ngOnInit(): void {
    if (this.controlUnit === undefined) {
      return;
    }
    else {

      this.lineChartData[0].data.push(this.controlUnit.current);
    }
  }
  
  ngAfterViewInit():void {
    var ctx = document.getElementById("myChartContinuous");
    console.log(ctx);
    this.myChart = new Chart(ctx, {
        type: this.lineChartType,
        data: {
            labels: this.lineChartLabels,
            datasets: this.lineChartData
        },
        options: this.lineChartOptions,

    });

  }

  public dateTime: String = new Date().toLocaleString();
  public lineChartLabels: Array<any> = [this.dateTime];
  public lineChartOptions: any = {
    responsive: true,
  
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';





  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  public generateCurrentDateTime(): String {
    return new Date().toLocaleString();

  }

  public addEntry(): void {
    //load input value
    var inputval = $("#new-value").val();
    var minvalue = this.controlUnit.min;
    var maxvalue = this.controlUnit.max;
    if (inputval > maxvalue || inputval < minvalue) {
    $("#new-value").select();
    $('#new-value').css('border', '1px solid #ff0000');
      return;
    }
    else{
    $('#new-value').css('border', 'none');
    }
    
    this.controlUnit.current=inputval;
    this.lineChartLabels.push(this.generateCurrentDateTime());
    this.lineChartData[0].data.push(inputval);
    
    this.myChart.update();
   
  }

}
