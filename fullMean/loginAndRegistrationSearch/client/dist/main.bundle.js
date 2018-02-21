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
var body_component_1 = __webpack_require__("../../../../../src/app/body/body.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.ts");
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/body/create-question/create-question.component.ts");
var show_question_component_1 = __webpack_require__("../../../../../src/app/body/show-question/show-question.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.ts");
var routes = [
    {
        // localhost:8000/dashboard/
        path: 'dashboard', component: body_component_1.BodyComponent, children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'new/Question', component: create_question_component_1.CreateQuestionComponent },
            { path: 'question/:id', component: show_question_component_1.ShowQuestionComponent },
            { path: 'new/Answer/:id', component: create_answer_component_1.CreateAnswerComponent },
        ]
    },
    {
        // localhost:8000/
        path: '', component: login_body_component_1.LoginBodyComponent, children: [
            { path: '', component: registration_component_1.RegistrationComponent }
        ]
    }
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

module.exports = "\n<router-outlet></router-outlet>\n"

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
        this.title = 'Login And Registration';
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
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login-body/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var body_component_1 = __webpack_require__("../../../../../src/app/body/body.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/body/create-question/create-question.component.ts");
var show_question_component_1 = __webpack_require__("../../../../../src/app/body/show-question/show-question.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_body_component_1.LoginBodyComponent,
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent,
                body_component_1.BodyComponent,
                dashboard_component_1.DashboardComponent,
                create_question_component_1.CreateQuestionComponent,
                show_question_component_1.ShowQuestionComponent,
                create_answer_component_1.CreateAnswerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                user_service_1.UserService,
                question_service_1.QuestionService,
                answer_service_1.AnswerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"currentUser != null \">Welcome {{ currentUser.first_name}}</h4>\n<a href (click)=\"logout()\">Logout</a><br>\n<a [routerLink]=\"['/dashboard']\">Home</a> |\n<a [routerLink]=\"['new/Question']\">Add a Question</a>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
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
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BodyComponent = /** @class */ (function () {
    function BodyComponent(_http, _router, _userService) {
        this._http = _http;
        this._router = _router;
        this._userService = _userService;
        this.currentUser = null;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.getUserSession();
    };
    BodyComponent.prototype.getUserSession = function () {
        var _this = this;
        this._userService.getCurrentUser().subscribe(function (res) {
            console.log(res.json());
            _this.currentUser = res.json();
            console.log(_this.currentUser);
            if (_this.currentUser == null) {
                // this._router.navigateByUrl('/');
            }
        });
    };
    BodyComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) {
            _this.currentUser = null;
        });
    };
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            user_service_1.UserService])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;


/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  create-answer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.ts":
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
var CreateAnswerComponent = /** @class */ (function () {
    function CreateAnswerComponent() {
    }
    CreateAnswerComponent.prototype.ngOnInit = function () {
    };
    CreateAnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-create-answer',
            template: __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateAnswerComponent);
    return CreateAnswerComponent;
}());
exports.CreateAnswerComponent = CreateAnswerComponent;


/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>New Question</legend>\n  <form (submit)=\"createQuestion()\">\n    <label>Question</label>\n    <input type=\"text\" name=\"question\" [(ngModel)]=\"newQuestion.question\">\n    <br>\n    \n    <label>Description(opt)</label>\n    <input type=\"text\" name=\"description\" [(ngModel)]=\"newQuestion.description\">\n    <br>\n    \n    <input type=\"submit\" value=\"Post Question\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.ts":
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
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(_router, _quetionService) {
        this._router = _router;
        this._quetionService = _quetionService;
        this.newQuestion = new question_1.Question;
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionComponent.prototype.createQuestion = function () {
        var _this = this;
        this._quetionService.createQuestion(this.newQuestion).subscribe(function (res) {
            console.log(res.json());
            _this._router.navigateByUrl('/dashboard');
        });
    };
    CreateQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-create-question',
            template: __webpack_require__("../../../../../src/app/body/create-question/create-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/create-question/create-question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            question_service_1.QuestionService])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());
exports.CreateQuestionComponent = CreateQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{ questions | json }} -->\n\n<table>\n    <tr>\n        <th>Question</th>\n        <th>Answers</th>\n        <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let question of questions\">\n        <td>{{question.question}}</td>\n        <td>{{question._answer.length}}</td>\n        <td><a href [routerLink]=\"['/dashboard/question', question._id]\">Show</a>  <a href [routerLink]=\"['/dashboard/new/Answer', question._id]\">Answer</a></td>\n    </tr>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_http, _router, _userService, _questionService, _answerService) {
        this._http = _http;
        this._router = _router;
        this._userService = _userService;
        this._questionService = _questionService;
        this._answerService = _answerService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.allQuestions();
    };
    DashboardComponent.prototype.allQuestions = function () {
        var _this = this;
        console.log(this._userService);
        this._questionService.getQuestions().subscribe(function (res) {
            _this.questions = res.json();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            user_service_1.UserService,
            question_service_1.QuestionService,
            answer_service_1.AnswerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{question | json}} -->\n\n<h2>{{question.question}}</h2>\n{{question._answer}}\n<table>\n  <tr>\n    <th></th>\n    <th></th>\n    <th></th>\n  </tr>\n  <tr *ngFor=\"let answer of question._answer\">\n    <td>\n        <p>{{ answer._user.first_name }}</p>\n        <h3>{{answer.answer}}</h3>\n    </td>\n    <td> {{ answer.likes }} </td>\n    <td> <button (click)='likeAnswer(answer._id)'>Like {{answer._id}}</button> </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.ts":
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
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var ShowQuestionComponent = /** @class */ (function () {
    function ShowQuestionComponent(_router, _route, _quetionService, _answerService) {
        this._router = _router;
        this._route = _route;
        this._quetionService = _quetionService;
        this._answerService = _answerService;
        this.question = new question_1.Question;
    }
    ShowQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.question_id = params.id; });
        this.getQuestion();
    };
    ShowQuestionComponent.prototype.getQuestion = function () {
        var _this = this;
        console.log(this.question_id);
        this._quetionService.getOneQuestion(this.question_id).subscribe(function (res) {
            console.log(res);
            _this.question = res.json();
        });
    };
    ShowQuestionComponent.prototype.likeAnswer = function (id) {
        var _this = this;
        console.log(id);
        this._answerService.likeAnswer(id).subscribe(function (res) {
            _this.getQuestion();
        });
    };
    ShowQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-show-question',
            template: __webpack_require__("../../../../../src/app/body/show-question/show-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/show-question/show-question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.ActivatedRoute,
            question_service_1.QuestionService,
            answer_service_1.AnswerService])
    ], ShowQuestionComponent);
    return ShowQuestionComponent;
}());
exports.ShowQuestionComponent = ShowQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login-body works!\n</p>\n<app-login></app-login>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.ts":
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
var LoginBodyComponent = /** @class */ (function () {
    function LoginBodyComponent() {
    }
    LoginBodyComponent.prototype.ngOnInit = function () {
    };
    LoginBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-login-body',
            template: __webpack_require__("../../../../../src/app/login-body/login-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginBodyComponent);
    return LoginBodyComponent;
}());
exports.LoginBodyComponent = LoginBodyComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"userLogin()\">\n    <label>Email:</label>\n    <input type=\"email\" required minlength=\"7\" name=\"email\" [(ngModel)]=\"user.email\">\n    <br>\n\n    <label>Password</label>\n    <input type=\"password\" name=\"password\" required minlength=\"5\" [(ngModel)]=\"user.password\">\n    <br>\n\n    <input type=\"submit\" value=\"Register\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.ts":
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
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this._userService.login(this.user, function (res) {
            if (res.json().error) {
                console.log(res.json());
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login-body/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"createUser()\">\n    <label>Email:</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\"><br>\n\n    <label>First Name:</label>\n    <input type=\"text\" name=\"first_name\" [(ngModel)]=\"newUser.first_name\"><br>\n\n    <label>Last Name:</label>\n    <input type=\"text\" name=\"last_name\" [(ngModel)]=\"newUser.last_name\"><br>\n\n    <label>Password</label>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"newUser.password\"><br>\n\n    <label>Comfirmation</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.password_confirm\"><br>\n\n    <input type=\"submit\" value=\"Register\">\n  </form>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.ts":
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
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.newUser = new user_1.User();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.createUser = function () {
        var _this = this;
        this._userService.create(this.newUser).subscribe(function (res) {
            if (res.json().errors) {
                console.log(res.json());
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/login-body/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/server/controllers/answer.service.ts":
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
var AnswerService = /** @class */ (function () {
    function AnswerService(_http) {
        this._http = _http;
    }
    AnswerService.prototype.createAnswer = function (id, answer) {
        return this._http.post("/answer/create/" + id, answer);
    };
    AnswerService.prototype.likeAnswer = function (id) {
        return this._http.post("/answer/like/" + id, id);
    };
    AnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/question.service.ts":
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
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.getQuestions = function () {
        return this._http.get("/questions");
    };
    QuestionService.prototype.createQuestion = function (question) {
        return this._http.post("/question/create", question);
    };
    QuestionService.prototype.getOneQuestion = function (id) {
        return this._http.get("/question/answer/" + id);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/user.service.ts":
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
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getCurrentUser = function () {
        return this._http.get("/user");
    };
    UserService.prototype.create = function (user) {
        return this._http.post("/user/create", user);
    };
    UserService.prototype.login = function (user, callback) {
        this._http.post("/user/login", user).subscribe(function (res) {
            callback(res);
        }, function (err) {
            callback(err);
        });
    };
    UserService.prototype.logout = function () {
        return this._http.delete("/user/logout");
    };
    UserService.prototype.getUsers = function () {
        return this._http.get("/users");
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/server/models/question.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ "../../../../../src/app/server/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
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