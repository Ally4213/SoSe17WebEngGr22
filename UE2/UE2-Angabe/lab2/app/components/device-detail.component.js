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
// Keep the Input import for now, you'll remove it later:
var device_1 = require('../model/device');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var device_service_1 = require('../services/device.service');
require('rxjs/add/operator/switchMap');
var DeviceDetailComponent = (function () {
    function DeviceDetailComponent(deviceService, route, location) {
        this.deviceService = deviceService;
        this.route = route;
        this.location = location;
    }
    DeviceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.deviceService.getDevice(params['id']); })
            .subscribe(function (device) { return _this.device = device; });
        //  this.device.draw_image(this.device.id, this.device.image, this.device.control_units[0].min, this.device.control_units[0].max, this.device.control_units[0].current,this.device.control_units[0].values);
    };
    DeviceDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', device_1.Device)
    ], DeviceDetailComponent.prototype, "device", void 0);
    DeviceDetailComponent = __decorate([
        core_1.Component({
            selector: 'device-detail',
            templateUrl: '../app/views/devicedetail.component.html',
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService, router_1.ActivatedRoute, common_1.Location])
    ], DeviceDetailComponent);
    return DeviceDetailComponent;
}());
exports.DeviceDetailComponent = DeviceDetailComponent;
//# sourceMappingURL=device-detail.component.js.map