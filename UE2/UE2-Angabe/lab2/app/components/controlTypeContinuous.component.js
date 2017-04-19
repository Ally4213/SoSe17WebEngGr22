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
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', controlUnit_1.ControlUnit)
    ], ControlTypeContinuousComponent.prototype, "controlUnit", void 0);
    ControlTypeContinuousComponent = __decorate([
        core_1.Component({
            selector: 'my-continuous-control',
            templateUrl: '../app/views/controlTypeContinuous.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ControlTypeContinuousComponent);
    return ControlTypeContinuousComponent;
}());
exports.ControlTypeContinuousComponent = ControlTypeContinuousComponent;
//# sourceMappingURL=controlTypeContinuous.component.js.map