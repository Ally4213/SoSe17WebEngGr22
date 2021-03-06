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
var sideBar_service_1 = require('../services/sideBar.service');
var core_1 = require("@angular/core");
var SidebarComponent = (function () {
    function SidebarComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.failed_logins = 0;
        this.server_start = new Date();
        this.currentUser = "Admin";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.failedLogins().subscribe(function (data) { return _this.failed_logins = data.failedLogins; });
        this.sidebarService.currentUser().subscribe(function (data) { return _this.currentUser = data.currentUser; });
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-sidebar',
            templateUrl: '../views/sidebar.component.html'
        }), 
        __metadata('design:paramtypes', [sideBar_service_1.SidebarService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map