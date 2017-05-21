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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var login_service_1 = require('../services/login.service');
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.formData = { "username": "", "password": "" };
        this.loginError = false;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngDoCheck = function () {
        this.username = $('#username-input').val();
        this.password = $('#password-input').val();
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loginService.login(this.username, this.password)
            .subscribe(function (data) {
            _this.response = data;
            console.log(_this.response);
            if (data.success === true) {
                _this.router.navigate(['/overview']);
            }
            else {
                alert(data.message);
                console.log(data.message);
            }
        });
    };
    __decorate([
        core_1.ViewChild('loginForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: '../views/login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map