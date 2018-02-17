webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var manage_player_component_1 = __webpack_require__("../../../../../src/app/manage-player/manage-player.component.ts");
var player_status_component_1 = __webpack_require__("../../../../../src/app/player-status/player-status.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/manage-player/player-list/player-list.component.ts");
var add_player_component_1 = __webpack_require__("../../../../../src/app/manage-player/add-player/add-player.component.ts");
var routes = [
    { path: '', component: manage_player_component_1.ManagePlayerComponent, children: [
            { path: '', component: player_list_component_1.PlayerListComponent },
            { path: 'new', component: add_player_component_1.AddPlayerComponent }
        ] },
    { path: 'status', component: player_status_component_1.PlayerStatusComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var manage_player_component_1 = __webpack_require__("../../../../../src/app/manage-player/manage-player.component.ts");
var player_status_component_1 = __webpack_require__("../../../../../src/app/player-status/player-status.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/manage-player/player-list/player-list.component.ts");
var add_player_component_1 = __webpack_require__("../../../../../src/app/manage-player/add-player/add-player.component.ts");
var manage_player_service_1 = __webpack_require__("../../../../../src/app/manage-player/manage-player.service.ts");
var player_status_service_1 = __webpack_require__("../../../../../src/app/player-status/player-status.service.ts");
var player_service_1 = __webpack_require__("../../../../../src/app/manage-player/player.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                manage_player_component_1.ManagePlayerComponent,
                player_status_component_1.PlayerStatusComponent,
                player_list_component_1.PlayerListComponent,
                add_player_component_1.AddPlayerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                manage_player_service_1.ManagePlayerService,
                player_status_service_1.PlayerStatusService,
                player_service_1.PlayerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/manage-player/add-player/add-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-player/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>\n<a [routerLink]=\"['/']\">List</a> /\n<a [routerLink]=\"['/new']\">Add Player</a>\n</h4>\n<h2>Add Player Component</h2>\n\n<form (submit)=\"onSubmit(); createPlayer.resetForm()\" #createPlayer=\"ngForm\">\n    name:<br>\n    <input name=\"name\" required minlength=\"2\" maxlength=\"30\" [(ngModel)]=\"player.name\" #title=\"ngModel\" /><br>\n    Preferred Position:<br>\n    <input name=\"position\" required minlength=\"2\" maxlength=\"30\" [(ngModel)]=\"player.position\" #title=\"ngModel\" />\n    <input type=\"submit\" value=\"create player\">\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/manage-player/add-player/add-player.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var player_1 = __webpack_require__("../../../../../src/app/manage-player/player.ts");
var player_service_1 = __webpack_require__("../../../../../src/app/manage-player/player.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
        this.player = new player_1.Player();
    };
    AddPlayerComponent.prototype.onSubmit = function () {
        var _this = this;
        this._playerService.createPlayer(this.player, function (player) {
            _this._router.navigateByUrl('/');
            console.log("you created a player");
        }, function (err) {
            console.log(err);
        });
    };
    AddPlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-player',
            template: __webpack_require__("../../../../../src/app/manage-player/add-player/add-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-player/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [player_service_1.PlayerService,
            router_1.Router])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());
exports.AddPlayerComponent = AddPlayerComponent;


/***/ }),

/***/ "../../../../../src/app/manage-player/manage-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-player/manage-player.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Manage Players</a> /\n<a [routerLink]=\"['/status']\">Player Status</a>\n\n<h2>Manage player component</h2>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/manage-player/manage-player.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ManagePlayerComponent = /** @class */ (function () {
    function ManagePlayerComponent() {
    }
    ManagePlayerComponent.prototype.ngOnInit = function () {
    };
    ManagePlayerComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-player',
            template: __webpack_require__("../../../../../src/app/manage-player/manage-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-player/manage-player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagePlayerComponent);
    return ManagePlayerComponent;
}());
exports.ManagePlayerComponent = ManagePlayerComponent;


/***/ }),

/***/ "../../../../../src/app/manage-player/manage-player.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ManagePlayerService = /** @class */ (function () {
    function ManagePlayerService() {
    }
    ManagePlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ManagePlayerService);
    return ManagePlayerService;
}());
exports.ManagePlayerService = ManagePlayerService;


/***/ }),

/***/ "../../../../../src/app/manage-player/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-player/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>\n  <a [routerLink]=\"['/']\">List</a> /\n  <a [routerLink]=\"['/new']\">Add Player</a>\n</h4>\n<h2>Player list Component</h2>"

/***/ }),

/***/ "../../../../../src/app/manage-player/player-list/player-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent() {
    }
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            template: __webpack_require__("../../../../../src/app/manage-player/player-list/player-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-player/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;


/***/ }),

/***/ "../../../../../src/app/manage-player/player.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var PlayerService = /** @class */ (function () {
    function PlayerService(_http) {
        this._http = _http;
    }
    PlayerService.prototype.createPlayer = function (player, callback, errorback) {
        this._http.post('/player', player).subscribe(function (res) {
            var player = res.json();
            console.log("nice you created a player");
            callback(player);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService.prototype.retrivePlayers = function (callback, errorback) {
        var _this = this;
        this._http.get('/player').subscribe(function (res) {
            _this.players = res.json();
            callback(_this.players);
        }, function (err) {
            errorback(err.json());
        });
    };
    PlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;


/***/ }),

/***/ "../../../../../src/app/manage-player/player.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        this.status = 0;
    }
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Manage Players</a> /\n<a [routerLink]=\"['/status']\">Player Status</a>\n\n<h2>Player Status component</h2>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/player-status/player-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayerStatusComponent = /** @class */ (function () {
    function PlayerStatusComponent() {
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
    };
    PlayerStatusComponent = __decorate([
        core_1.Component({
            selector: 'app-player-status',
            template: __webpack_require__("../../../../../src/app/player-status/player-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/player-status/player-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerStatusComponent);
    return PlayerStatusComponent;
}());
exports.PlayerStatusComponent = PlayerStatusComponent;


/***/ }),

/***/ "../../../../../src/app/player-status/player-status.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PlayerStatusService = /** @class */ (function () {
    function PlayerStatusService() {
    }
    PlayerStatusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PlayerStatusService);
    return PlayerStatusService;
}());
exports.PlayerStatusService = PlayerStatusService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map