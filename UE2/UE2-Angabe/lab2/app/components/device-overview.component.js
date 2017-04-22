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
var device_service_1 = require('../services/device.service');
var core_1 = require('@angular/core');
var DeviceOverviewComponent = (function () {
    function DeviceOverviewComponent(deviceService) {
        this.deviceService = deviceService;
    }
    DeviceOverviewComponent.prototype.getDevices = function () {
        var _this = this;
        this.deviceService.getDevices().then(function (devices) { return _this.devices = devices; });
    };
    DeviceOverviewComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DeviceOverviewComponent.prototype.ngAfterViewChecked = function () {
        if (this.devices === undefined) {
            return;
        }
        else {
            /** LoadSVGToDom();**/
            console.log(this.devices);
            this.drawDeviceImgs(this.devices);
        }
    };
    DeviceOverviewComponent.prototype.drawDeviceImgs = function (devices) {
        devices.forEach(function (device) {
            console.log("calling draw_device in overview with args");
            device.draw_image(device.id, device.image, device.control_units[0].min, device.control_units[0].max, device.control_units[0].current, device.control_units[0].values);
        });
        console.log("called draw_device in overview with args");
    };
    DeviceOverviewComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    DeviceOverviewComponent.prototype.onEdit = function (device) {
        this.selectedDevice = device;
    };
    DeviceOverviewComponent = __decorate([
        core_1.Component({
            selector: 'my-devices',
            templateUrl: "../app/views/overview.component.html",
            providers: [device_service_1.DeviceService]
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], DeviceOverviewComponent);
    return DeviceOverviewComponent;
}());
exports.DeviceOverviewComponent = DeviceOverviewComponent;
//# sourceMappingURL=device-overview.component.js.map