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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_charts_1 = require('ng2-charts');
var app_component_1 = require('./components/app.component');
var device_detail_component_1 = require('./components/device-detail.component');
var device_overview_component_1 = require('./components/device-overview.component');
var device_service_1 = require('./services/device.service');
var login_component_1 = require('./components/login.component');
var options_component_1 = require('./components/options.component');
var controlTypeContinuous_component_1 = require('./components/controlTypeContinuous.component');
var controlTypeEnum_component_1 = require('./components/controlTypeEnum.component');
var controlTypeBoolean_component_1 = require('./components/controlTypeBoolean.component');
var footer_component_1 = require('./components/footer.component');
var header_loggedIn_component_1 = require('./components/header-loggedIn.component');
var header_loggedOut_component_1 = require('./components/header-loggedOut.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                device_detail_component_1.DeviceDetailComponent,
                device_overview_component_1.DeviceOverviewComponent,
                login_component_1.LoginComponent,
                options_component_1.OptionsComponent,
                controlTypeBoolean_component_1.ControlTypeBooleanComponent,
                controlTypeContinuous_component_1.ControlTypeContinuousComponent,
                controlTypeEnum_component_1.ControlTypeEnumComponent,
                footer_component_1.FooterComponent,
                header_loggedIn_component_1.HeaderLoggedInComponent,
                header_loggedOut_component_1.HeaderLogged0utComponent
            ],
            providers: [
                device_service_1.DeviceService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map