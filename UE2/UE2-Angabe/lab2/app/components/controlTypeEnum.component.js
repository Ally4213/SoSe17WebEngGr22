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
var ControlTypeEnumComponent = (function () {
    function ControlTypeEnumComponent() {
        // PolarArea
        this.chartLabels = ['geschossen', 'offen', 'halb geöffnet'];
        /** this.controlUnit.values;**/
        this.chartData = [0, 0, 0];
        this.dateTime = new Date().toLocaleString();
        this.chartLogDate = [this.dateTime];
        this.chartLogState = [];
    }
    ControlTypeEnumComponent.prototype.ngOnInit = function () {
        if (this.controlUnit === undefined) {
            return;
        }
        else {
            if ((this.controlUnit.current) > 0) {
                this.chartData[1] = 1;
                this.chartLogState.push(this.chartLabels[0]);
            }
            else {
                this.chartData[0] = 1;
                this.chartLogState.push(this.chartLabels[1]);
            }
        }
    };
    ControlTypeEnumComponent.prototype.ngAfterViewInit = function () {
        var ctx = document.getElementById("myChartEnum");
        console.log(ctx);
        this.myChart = new Chart(ctx, {
            type: "polarArea",
            options: {
                animation: {
                    animateScale: true
                }
            },
            data: {
                labels: this.chartLabels,
                datasets: [{
                        data: this.chartData,
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                    }]
            },
        });
    };
    ControlTypeEnumComponent.prototype.addEntry = function () {
        var inputval = $("#new-value").val();
        this.controlUnit.current = inputval;
        switch (inputval) {
            case 'offen':
                inputval = 1;
                break;
            case 'halb geöffnet':
                inputval = 2;
                break;
            default:
                inputval = 0;
        }
        this.chartData[inputval] += 1;
        this.chartLogDate.push(this.generateCurrentDateTime());
        this.chartLogState.push(this.controlUnit.current);
        this.myChart.update();
    };
    ControlTypeEnumComponent.prototype.generateCurrentDateTime = function () {
        return new Date().toLocaleString();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', controlUnit_1.ControlUnit)
    ], ControlTypeEnumComponent.prototype, "controlUnit", void 0);
    ControlTypeEnumComponent = __decorate([
        core_1.Component({
            selector: 'my-enum-control',
            templateUrl: '../app/views/controlTypeEnum.component.html',
            styleUrls: ['../../styles/controlType.css'],
            styles: [
                "\n      .myChartEnum{\n          width: 500px !important;\n          height: 500px !important;\n      }\n    "
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ControlTypeEnumComponent);
    return ControlTypeEnumComponent;
}());
exports.ControlTypeEnumComponent = ControlTypeEnumComponent;
//# sourceMappingURL=controlTypeEnum.component.js.map