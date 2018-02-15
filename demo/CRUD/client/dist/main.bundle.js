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
var routes = [];
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

module.exports = "\n<app-user></app-user>"

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
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_details_component_1 = __webpack_require__("../../../../../src/app/user/user-details/user-details.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var user_list_component_1 = __webpack_require__("../../../../../src/app/user/user-list/user-list.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_edit_component_1 = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_details_component_1.UserDetailsComponent,
                user_new_component_1.UserNewComponent,
                user_list_component_1.UserListComponent,
                user_edit_component_1.UserEditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.ts":
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
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-details',
            template: __webpack_require__("../../../../../src/app/user/user-details/user-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h5>edit user component</h5> -->\n<form (submit)=\"update()\">\n  first name:\n  <input type=\"text\" name=\"first_name\" [(ngModel)]=\"userEdit.first_name\">\n  <br> last name:\n  <input type=\"text\" name=\"last_name\" [(ngModel)]=\"userEdit.last_name\">\n  <br> email:\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"userEdit.email\">\n  <br>\n  <input type=\"submit\" value=\"update\">\n</form>\n<br>"

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.ts":
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
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent() {
        this.updateUserEvent = new core_1.EventEmitter();
        this.userEdit = new user_1.User();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.user);
        // console.log(this.userEdit)
    };
    UserEditComponent.prototype.update = function () {
        this.userEdit.editable = false;
        this.updateUserEvent.emit(this.userEdit);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], UserEditComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserEditComponent.prototype, "updateUserEvent", void 0);
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'app-user-edit',
            template: __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>User List Component</h3>\n<div *ngFor=\"let user of users\">\n  {{user._id}}-{{user.first_name}} - {{ user.last_name }} - {{ user.email }}\n   <button (click)=\"destroy(user)\">Delete</button>\n   <button (click)=\"user.editable = !user.editable\">Edit</button>\n  <app-user-edit [user]=\"user\" (updateUserEvent)=\"update($event)\" *ngIf=\"user.editable\"></app-user-edit>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.ts":
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
var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        this.destroyUserEvent = new core_1.EventEmitter();
        this.updateUserEvent = new core_1.EventEmitter();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.destroy = function (user) {
        this.destroyUserEvent.emit(user);
    };
    UserListComponent.prototype.update = function (user) {
        this.updateUserEvent.emit(user);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "destroyUserEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "updateUserEvent", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>User new Component</h3>\n<form (submit)=\"create()\">\n  first name:\n  <input type=\"text\" name=\"first_name\" [(ngModel)]=\"newUser.first_name\"><br>\n  last name:\n  <input type=\"text\" name=\"last_name\" [(ngModel)]=\"newUser.last_name\"><br>\n  email:\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\"><br>\n  <input type=\"submit\" value=\"create\">\n</form><br>"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
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
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent() {
        this.newUser = new user_1.User();
        this.createNewUserEvent = new core_1.EventEmitter();
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent.prototype.create = function () {
        // call the server to save
        this.createNewUserEvent.emit(this.newUser);
        this.newUser = new user_1.User();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserNewComponent.prototype, "createNewUserEvent", void 0);
    UserNewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserNewComponent);
    return UserNewComponent;
}());
exports.UserNewComponent = UserNewComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>User component</h3>\n{{ users | json }}\n<app-user-new (createNewUserEvent)=\"create($event)\"></app-user-new>\n<app-user-list \n  [users]=\"users\" \n  (destroyUserEvent)=\"destroy($event)\"\n  (updateUserEvent)= \"update($event)\"\n  ></app-user-list>\n<!-- <app-user-edit></app-user-edit> -->"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
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
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.create = function (user) {
        var _this = this;
        this._userService.create(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
        this.users.push(user);
    };
    UserComponent.prototype.destroy = function (user) {
        var _this = this;
        ;
        this._userService.destroy(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
    };
    UserComponent.prototype.update = function (user) {
        var _this = this;
        console.log(user);
        this._userService.update(user)
            .then(function (status) { return _this.getUsers(); })
            .catch(function (err) { return console.log(err); });
    };
    // back end **********
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .then(function (users) { return _this.users = users; })
            .catch(function (err) { return console.log(err); });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
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
__webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var UserService = /** @class */ (function () {
    function UserService(_htpp) {
        this._htpp = _htpp;
    }
    UserService.prototype.create = function (user) {
        return this._htpp.post("/users", user)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.destroy = function (user) {
        return this._htpp.delete("/users/" + user._id).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.update = function (user) {
        return this._htpp.put("/users/" + user._id, user).map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUsers = function () {
        return this._htpp.get("/users").map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUser = function (user) {
        // return this._htpp.get("/users/" + user._id).map(data => data.json()).toPromise()    
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_id, first_name, last_name, email, editable) {
        if (_id === void 0) { _id = ""; }
        if (first_name === void 0) { first_name = ""; }
        if (last_name === void 0) { last_name = ""; }
        if (email === void 0) { email = ""; }
        if (editable === void 0) { editable = false; }
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.editable = editable;
    }
    return User;
}());
exports.User = User;


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