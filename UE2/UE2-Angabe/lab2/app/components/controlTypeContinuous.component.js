"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var controlUnit_1 = require('../model/controlUnit');
var core_1 = require('@angular/core');
var ControlTypeContinuousComponent = (function () {
    function ControlTypeContinuousComponent() {
        // lineChart
        this.lineChartData = [
            { data: [], label: 'Verlauf' },
        ];
        this.dateTime = new Date().toLocaleString();
        this.lineChartLabels = [this.dateTime];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ControlTypeContinuousComponent.prototype.ngOnInit = function () {
        if (this.controlUnit === undefined) {
            return;
        }
        else {
            this.lineChartData[0].data.push(this.controlUnit.current);
        }
    };
    ControlTypeContinuousComponent.prototype.ngAfterViewInit = function () {
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
    };
    ControlTypeContinuousComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    ControlTypeContinuousComponent.prototype.generateCurrentDateTime = function () {
        return new Date().toLocaleString();
    };
    ControlTypeContinuousComponent.prototype.addEntry = function () {
        //load input value
        var inputval = $("#new-value").val();
        var minvalue = this.controlUnit.min;
        var maxvalue = this.controlUnit.max;
        if (inputval > maxvalue || inputval < minvalue) {
            $("#new-value").select();
            $('#new-value').css('border', '1px solid #ff0000');
            return;
        }
        else {
            $('#new-value').css('border', 'none');
        }
        this.controlUnit.current = inputval;
        this.lineChartLabels.push(this.generateCurrentDateTime());
        this.lineChartData[0].data.push(inputval);
        this.myChart.update();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', controlUnit_1.ControlUnit)
    ], ControlTypeContinuousComponent.prototype, "controlUnit", void 0);
    ControlTypeContinuousComponent = __decorate([
        core_1.Component({
            selector: 'my-continuous-control',
            templateUrl: '../app/views/controlTypeContinuous.component.html',
            styleUrls: ['../../styles/controlType.css'],
            styles: [
                "\n    .myChartContinuous{\n      width:600px !important;\n      height:300px !important;\n    }\n  "
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ControlTypeContinuousComponent);
    return ControlTypeContinuousComponent;
}());
exports.ControlTypeContinuousComponent = ControlTypeContinuousComponent;
//# sourceMappingURL=controlTypeContinuous.component.js.map