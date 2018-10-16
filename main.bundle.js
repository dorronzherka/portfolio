webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_main_header_header_component__ = __webpack_require__("./src/app/layouts/main/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_main_footer_footer_component__ = __webpack_require__("./src/app/layouts/main/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_main_layout_layout_component__ = __webpack_require__("./src/app/layouts/main/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_home_home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_experience_experience_component__ = __webpack_require__("./src/app/main/experience/experience.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__layouts_main_layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__main_home_home_component__["a" /* HomeComponent */] },
            { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_8__main_experience_experience_component__["a" /* ExperienceComponent */] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__layouts_main_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__layouts_main_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__layouts_main_layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_experience_experience_component__["a" /* ExperienceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/main/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\n    background-color: #000;\n}\n\n.copyright-text{\n    color: #fff;\n    font-family: \"Oswald\";\n    font-size: 15px;\n    margin-top: 29px;\n    margin-bottom: 29px;\n}"

/***/ }),

/***/ "./src/app/layouts/main/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"my-footer\">\n  <div class=\"container-fluid\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n        <div class=\"text-center\">\n            <p class=\"copyright-text\">\n                &copy; Dorron Zherka\n              </p>\n        </div>\n     </div>\n   </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/layouts/main/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layouts/main/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layouts/main/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/main/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".my-navbar {\n    background-color: #ffffff !important;\n}\n.my-brand {\n    font-family: 'Libre Barcode 128 Text', cursive;\n    font-size: 37px;\n    color: #000 !important;\n}\n.my-menu li a {\n    font-family: \"Oswald\";\n    color: #000 !important;\n}\n.my-menu li a:hover {\n    border-bottom: 1px solid #000;\n}\n.my-menu li.active a{\n    border-bottom: 1px solid #000;\n}\n.my-button {\n  color: #000; \n}"

/***/ }),

/***/ "./src/app/layouts/main/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<nav class=\"navbar navbar-expand-md flex-column navbar-light bg-light my-navbar\">\n  <a class=\"navbar-brand align-self-center m-0 pb-3 position-md-absolute pb-md-0 my-brand\" href=\"#\">Dorron Zherka</a>\n  <button class=\"navbar-toggler my-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <div class=\"collapse navbar-collapse justify-content-md-center w-100 my-menu\" id=\"navbarNav\">\n   <ul class=\"navbar-nav text-center\">\n    <li class=\"nav-item active\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n     <a class=\"nav-link\" [routerLink]=\"['']\">About me <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n     <a class=\"nav-link\"  [routerLink]=\"['/experience']\">Experience</a>\n    </li>\n    <li class=\"nav-item\">\n     <a class=\"nav-link\" href=\"#\">Education</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Skills</a>\n     </li>\n     <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Projects</a>\n     </li>\n     <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Contact me</a>\n     </li>\n   </ul>\n  </div>\n </nav>"

/***/ }),

/***/ "./src/app/layouts/main/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layouts/main/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layouts/main/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/main/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/main/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/layouts/main/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layouts/main/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/main/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/main/experience/experience.component.css":
/***/ (function(module, exports) {

module.exports = ".my-img {\n    padding: 10px 10px;\n}\n.my-cards {\n    margin-left: 70px;\n    margin-bottom: 45px;\n}\n.my-row-cards {\n    margin-top: 25px;\n}\n.my-card{\n    border-color: #000 !important;\n    border-radius: 15px;\n    padding: 20px 20px; \n}\n.my-btn {\n    border-color: #000;\n    background-color: transparent;\n    color: #000;\n    font-family: \"Oswald\";\n}\n.my-btn:hover {\n    border-color: #fff;\n    background-color: #000;\n    color: #fff;\n}\n.my-card .card-title {\n    font-family: \"Oswald\";\n}\n.my-card .card-text {\n    font-family: \"Open Sans Condensed\";\n    font-size: 18px;\n    color: dimgrey;\n}\n    \n\n\n"

/***/ }),

/***/ "./src/app/main/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <div class=\"row my-row-cards\">\n    <div *ngFor=\"let job of jobs\" class=\"col-md-3 my-cards\">\n      <div class=\"card my-card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top my-img\" src=\"/assets/images/{{job.image}}\" alt=\"Card image cap\">\n        <div class=\"text-center\">\n          <p class=\"card-text\"><small class=\"text-muted\">Year: {{job.year}}</small></p>\n        </div>  \n        <div class=\"card-body\">\n          <div class=\"text-center\">\n              <h5 class=\"card-title\"> {{job.position}}</h5>\n              <p class=\"card-text\">{{job.description}}.</p>\n            <a href=\"{{job.link}}\" class=\"btn btn-primary my-btn\" target=\"_blank\">Go to link</a>\n          </div>\n        </div>\n      </div>\n    </div>\n </div>\n</div>"

/***/ }),

/***/ "./src/app/main/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.jobs = [
            {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            },
            {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            },
            {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            },
            {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            }, {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            }, {
                position: 'Software Developer',
                image: 'bw-odk.png',
                description: 'Work in applications, platforms and websites of ODK’s various projects with MEAN Stack',
                year: 2018,
                link: 'http://www.opendatakosovo.org'
            }
        ];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("./src/app/main/experience/experience.component.html"),
            styles: [__webpack_require__("./src/app/main/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".my-img {\n    width: 250px;\n    margin-top: 150px;\n    margin-bottom: 150px;\n}\n \n.my-title {\n    font-family: \"Oswald\";\n    margin-bottom: 35px;\n}\n \n.my-paragraph {\n    font-family: \"Open Sans Condensed\";\n    font-size: 21px;\n}\n \n.about-me {\n    margin-top: 120px;\n    padding-right: 150px;\n}\n\n"

/***/ }),

/***/ "./src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n           <div class=\"text-center\">\n              <img src=\"/assets/images/dorron-img.jpg\" alt=\"\" class=\"img-fluid rounded-circle my-img\">\n           </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 about-me\">\n        <div class=\"text-center\">\n           <h1 class=\"my-title\"  >About me</h1>\n        </div>\n        <div class=\"text-center\">\n          <p class=\"my-paragraph text-justify\">\n              I'm Dorron Zherka, since i was child i was passionate to technology, \n              i loved to experiment with computers, and now i am software developer, \n              i love to code, play with many programming language and try their API'S,\n              make something great with them, for me a computer is magic wand and the code is a magic spell.\n             I also I'm  addicdet to geekstuf like comics, japanese mangas and animes, and i love to play retro and new games.</p>\n        </div>\n       </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/main/home/home.component.html"),
            styles: [__webpack_require__("./src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map