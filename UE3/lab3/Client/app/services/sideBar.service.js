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
require('rxjs/add/operator/map');
var SidebarService = (function () {
    function SidebarService(http) {
        this.http = http;
    }
    //  login(username: string, password: string) {
    //    let headers = new Headers({ 'content-type': 'application/json' });
    //
    //    let options = new RequestOptions({ headers: headers });
    //
    //    return this.http.post('http://localhost:8081/authenticate', JSON.stringify({ username: username, password: password }), options)
    //      .map(res => res.json());
    //
    //  }
    //
    //  changePW(oldPW: string, newPW: string) {
    //    let headers = new Headers({ 'content-type': 'application/json' });
    //
    //    let options = new RequestOptions({ headers: headers });
    //
    // return   this.http.post('http://localhost:8081/changepassword', JSON.stringify({ oldPassword: oldPW, password: newPW }), options)
    //      .map(res => res.json());
    //  }
    SidebarService.prototype.failedLogins = function () {
        return this.http.get('http://localhost:8081/failedLogins')
            .map(function (res) { return res.json(); });
    };
    SidebarService.prototype.currentUser = function () {
        return this.http.get('http://localhost:8081/currentUser')
            .map(function (res) { return res.json(); });
    };
    SidebarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SidebarService);
    return SidebarService;
}());
exports.SidebarService = SidebarService;
//# sourceMappingURL=sideBar.service.js.map