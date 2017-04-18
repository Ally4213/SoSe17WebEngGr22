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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ally's Angular App";
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n    <div role=\"navigation\" aria-label=\"jumplinks\">\n  <a href=\"#devicesheadline\" class=\"accessibility\">Zum Inhalt springen</a>\n</div>\n\n<header aria-labelledby=\"bannerheadline\">\n  <a href=\"overview.html\"><img class=\"title-image\" src=\"../../images/big-logo-small.png\" alt=\"BIG Smart Home logo\"></a>\n\n  <h1 class=\"header-title\" id=\"bannerheadline\">\n    BIG Smart Home\n  </h1>\n  <nav aria-labelledby=\"navigationheadline\">\n    <h2 class=\"accessibility\" id=\"navigationheadline\">Navigation</h2>\n    <ul class=\"navigation-list\">\n      <li class=\"nav-items\">\n        <ul>\n          <li>\n            <a routerLink=\"/options\" class=\"button\" accesskey=\"2\">Optionen</a>\n          </li>\n          <li>\n            <a routerLink=\"/login\" class=\"button\" accesskey=\"1\">Abmelden</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"overflow-icon\">\n        <a href=\"#\" class=\"button\" accesskey=\"1\">\u2630</a>\n      </li>\n    </ul>\n  </nav>\n</header>\n        <nav>\n     <a routerLink=\"/login\">Login</a>\n     <a routerLink=\"/overview\">Overview</a>\n     <a routerLink=\"/options\">Options</a> \n   </nav>\n   <router-outlet></router-outlet>\n  <footer>\n  \u00A9 2017 BIG Smart Home\n</footer>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map