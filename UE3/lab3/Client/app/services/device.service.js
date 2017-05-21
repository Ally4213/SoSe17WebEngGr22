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
var http_1 = require('@angular/http');
var device_parser_service_1 = require('./device-parser.service');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var DeviceService = (function () {
    function DeviceService(parserService, http) {
        this.parserService = parserService;
        this.http = http;
    }
    //TODO Sie können dieses Service benutzen, um alle REST-Funktionen für die Smart-Devices zu implementieren
    DeviceService.prototype.fetchDevices = function () {
        return this.http.get('http://localhost:8081/devices').map(function (res) { return res.json(); }).toPromise();
    };
    DeviceService.prototype.getDevices = function () {
        //TODO Lesen Sie die Geräte über die REST-Schnittstelle aus
        /*
         * Verwenden Sie das DeviceParserService um die via REST ausgelesenen Geräte umzuwandeln.
         * Das Service ist dabei bereits vollständig implementiert und kann wie unten demonstriert eingesetzt werden.
         */
        var _this = this;
        var serverdata = new Array();
        //return this.http.get('http://localhost:8081/devices').toPromise().then(function(data):Device[]  {
        //   let serverdata = new Array();
        //   let rdata = data.json();
        //
        //    let x = Promise.resolve(rdata).then(devices => {
        //      for (let i = 0; i < devices.length; i++) {
        //        serverdata[i] = this.parserService.parseDevice(devices[i]);
        //      }
        //      return devices;
        //    });
        //    
        //    console.log(x);
        //    
        //   return serverdata;
        //  
        //  
        //} );
        var x = Promise.resolve(this.http.get('http://localhost:8081/devices').map(function (resp) { return resp.json().devices; }).toPromise()).then(function (devices) {
            for (var i = 0; i < devices.length; i++) {
                devices[i] = _this.parserService.parseDevice(devices[i]);
            }
            return devices;
        });
        console.log(x);
        return x;
        //    console.log(serverdata);
        //    
        //    let x = Promise.resolve(DEVICES).then(devices => {
        //      for (let i = 0; i < devices.length; i++) {
        //        devices[i] = this.parserService.parseDevice(devices[i]);
        //      }
        //      return devices;
        //    });
        //    
        //    console.log(x);
        //    
        //   return x;
    };
    DeviceService.prototype.getDevice = function (id) {
        return this.getDevices()
            .then(function (devices) { return devices.find(function (device) { return device.id === id; }); });
    };
    DeviceService.prototype.removeDevice = function (id) {
        console.log("in device service removing device");
        console.log('called delete on id>' + id);
        return this.http.delete('http://localhost:8081/device/delete/' + id).map(function (res) { return res.toString(); });
    };
    DeviceService.prototype.addDevice = function (displayname, typeInput, typeName, elemName, elemType) {
        console.log('adding device in device service');
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8081/device/add', JSON.stringify({ display_name: displayname, 'type': typeInput, type_name: typeName, control_units: [{ 'name': elemName, 'type': elemType }] }), options).map(function (res) { return res.json(); });
    };
    DeviceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [device_parser_service_1.DeviceParserService, http_1.Http])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map