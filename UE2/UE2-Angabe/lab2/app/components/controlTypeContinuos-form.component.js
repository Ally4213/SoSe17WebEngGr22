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
var core_1 = require('@angular/core');
var controlUnit_1 = require('../model/controlUnit');
var ContinuousFormComponent = (function () {
    function ContinuousFormComponent() {
    }
    ContinuousFormComponent.prototype.getCurrentEntry = function () {
        console.log("in form function return current entry");
        return this.controlUnit.current;
    };
    ContinuousFormComponent.prototype.addEntry = function (number) {
        console.log("in form function add entry");
        this.controlUnit.current = number;
        return number;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', controlUnit_1.ControlUnit)
    ], ContinuousFormComponent.prototype, "controlUnit", void 0);
    ContinuousFormComponent = __decorate([
        core_1.Component({
            selector: 'my-continuous-form',
            templateUrl: '../app/views/continuous-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContinuousFormComponent);
    return ContinuousFormComponent;
}());
exports.ContinuousFormComponent = ContinuousFormComponent;
//# sourceMappingURL=controlTypeContinuos-form.component.js.map