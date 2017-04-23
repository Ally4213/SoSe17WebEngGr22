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
var ControlTypeBooleanComponent = (function () {
    function ControlTypeBooleanComponent() {
        // Doughnut
        this.doughnutChartLabels = ['Aus', 'An'];
        this.doughnutChartData = [0, 0];
        this.dateTime = new Date().toLocaleString();
        this.doughnutChartLogDate = [this.dateTime];
        this.doughnutChartLogState = [];
    }
    ControlTypeBooleanComponent.prototype.ngOnInit = function () {
        if (this.controlUnit === undefined) {
            return;
        }
        else {
            if ((this.controlUnit.current) > 0) {
                this.doughnutChartData[1] = 1;
                this.doughnutChartLogState.push(this.doughnutChartLabels[0]);
            }
            else {
                this.doughnutChartData[0] = 1;
                this.doughnutChartLogState.push(this.doughnutChartLabels[1]);
            }
        }
    };
    ControlTypeBooleanComponent.prototype.ngAfterViewInit = function () {
        var ctx = document.getElementById("myChartBoolean");
        console.log(ctx);
        this.myChartBoolean = new Chart(ctx, {
            type: "doughnut",
            options: {
                animation: {
                    animateScale: true
                }
            },
            data: {
                labels: this.doughnutChartLabels,
                datasets: [{
                        data: this.doughnutChartData,
                        backgroundColor: ["#FF6384", "#36A2EB"],
                        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
                    }]
            },
        });
    };
    ControlTypeBooleanComponent.prototype.addEntry = function () {
        //load input value
        var inputval = $("#new-value").prop("checked");
        var lamp_state;
        if (inputval) {
            lamp_state = 1;
        }
        else {
            lamp_state = 0;
        }
        if (this.controlUnit.current != lamp_state) {
            this.controlUnit.current = lamp_state;
            this.doughnutChartData[this.controlUnit.current] += 1;
            this.doughnutChartLogDate.push(this.generateCurrentDateTime());
            this.doughnutChartLogState.push(this.doughnutChartLabels[this.controlUnit.current]);
            this.myChartBoolean.update();
        }
    };
    ControlTypeBooleanComponent.prototype.generateCurrentDateTime = function () {
        return new Date().toLocaleString();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', controlUnit_1.ControlUnit)
    ], ControlTypeBooleanComponent.prototype, "controlUnit", void 0);
    ControlTypeBooleanComponent = __decorate([
        core_1.Component({
            selector: 'my-boolean-control',
            templateUrl: '../app/views/controlTypeBoolean.component.html',
            styleUrls: ['../../styles/controlType.css'],
            styles: [
                "   .myChartBoolean{\n          width:600px !important;\n          height:600px !important;\n      }\n    "
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ControlTypeBooleanComponent);
    return ControlTypeBooleanComponent;
}());
exports.ControlTypeBooleanComponent = ControlTypeBooleanComponent;
//# sourceMappingURL=controlTypeBoolean.component.js.map