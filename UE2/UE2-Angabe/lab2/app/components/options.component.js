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
var forms_1 = require('@angular/forms');
var OptionsComponent = (function () {
    function OptionsComponent() {
        this.ChangePassword = { "oldpw": "", "newpw1": "", "newpw2": "" };
    }
    OptionsComponent.prototype.submitFormData = function () {
        if (this.changePasswordForm.valid) {
            this.changePasswordForm.reset();
            alert("Change was submitted.");
        }
    };
    __decorate([
        core_1.ViewChild('changePasswordForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], OptionsComponent.prototype, "changePasswordForm", void 0);
    OptionsComponent = __decorate([
        core_1.Component({
            selector: 'my-options',
            templateUrl: '../app/views/options.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], OptionsComponent);
    return OptionsComponent;
}());
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=options.component.js.map