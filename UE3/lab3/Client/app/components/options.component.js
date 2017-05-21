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
require('rxjs/add/operator/toPromise');
var forms_1 = require('@angular/forms');
var login_service_1 = require('../services/login.service');
var OptionsComponent = (function () {
    function OptionsComponent(http, loginService) {
        this.http = http;
        this.loginService = loginService;
    }
    ;
    OptionsComponent.prototype.ngOnInit = function () {
        this.updateError = false;
    };
    OptionsComponent.prototype.ngDoCheck = function () {
        this.oldPW = $('#old-password-input').val();
        this.newPW = $('#new-password-input').val();
    };
    OptionsComponent.prototype.equalsPW = function (form) {
        if (!form || !form.value || !form.value["repeat-password"] || !form.value["new-password"]) {
            return false;
        }
        return form.value["repeat-password"] === form.value["new-password"];
    };
    /**
     * Liest das alte Passwort, das neue Passwort und dessen Wiederholung ein und übertraegt diese an die REST-Schnittstelle
     * @param form
     */
    OptionsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loginService.changePW(this.oldPW, this.newPW)
            .subscribe(function (data) {
            _this.response = data;
            console.log(_this.response);
            if (data.success === true) {
                alert(data.message);
            }
            else {
                alert(data.message);
            }
        });
        if (!form) {
            return;
        }
        form.resetForm();
    };
    __decorate([
        core_1.ViewChild('optionsForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], OptionsComponent.prototype, "optionsForm", void 0);
    OptionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-options',
            templateUrl: '../views/options.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, login_service_1.LoginService])
    ], OptionsComponent);
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=options.component.js.map