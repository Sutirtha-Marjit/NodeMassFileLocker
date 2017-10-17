webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resource-box-image{\r\n    transition: all 1s;\r\n    opacity: 0; \r\n}\r\n.image-loaded{\r\n    opacity:1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-signin (onSigninSuccessful)=\"loginStatusChange($event)\"  *ngIf=\"!signedIn\">\r\n</app-signin>\r\n<div class=\"app-container dataPostModalOpen-{{dataPostModalOpen}} popupOpen-{{popupOpen}}\" *ngIf=\"signedIn\">\r\n<div class=\"pic-resource-panel WText\">\r\n  <div class=\"scrollable\">\r\n  <header>\r\n      <div class=\"row\"><h3 class=\"brand-header\" style=\"padding:0.65rem 0.55rem; width:100%; text-align:center;\">Resource Allotment</h3></div>\r\n      <div><small><span>{{getModifiedResourceList(false).length}} Resources left to select</span> </small> &nbsp;&nbsp;&nbsp; <a (click)=\"logout()\" class=\"btn btn-sm btn-dark\" href=\"#\">Logout</a></div>\r\n  </header>\r\n    \r\n   <div class=\"pic-container image-pool\" >\r\n     <div (click)=\"setCurrentObject(currentPic,currentPic.isDir)\" class=\"pic rounded\" *ngFor=\"let currentPic of (getModifiedResourceList(false)); let $index = index;\">\r\n       <div class=\"bag rounded\">\r\n          <img *ngIf=\"!currentPic.isDir\"  (load)=\"onResourceImageLoad($index)\"  src=\"{{currentPic.sourcePath}}\" class=\"rounded resource-box-image\" />\r\n          <div *ngIf=\"currentPic.isDir\">\r\n          <span class=\"icon-span-folder\">\r\n            <span>{{currentPic.name}}</span>\r\n          </span>\r\n          \r\n          </div>\r\n      </div>\r\n     </div>          \r\n   </div>\r\n   </div>  \r\n</div>  \r\n<div class=\"console-resource-panel\">\r\n    <!-- -->  \r\n    <div class=\"container\"> \r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col\">\r\n      <div class=\"selection-panel-header\">\r\n      <h3>Your selected resources</h3>\r\n      <h6 >\r\n        <span >Only <span>{{(getModifiedResourceList(true)).length}}</span> resources selected out of {{localImagePool.length}}</span>\r\n        <a *ngIf=\"(getModifiedResourceList(true)).length\" href=\"#\" (click)=\"resetCurrentSelectedObject()\">Empty List</a>\r\n      </h6>\r\n      </div>\r\n      \r\n      <div class=\"preview-image-container \">\r\n        <div class=\"pic\" *ngFor=\"let selectPic of (getModifiedResourceList(true))\" >\r\n            <div class=\"bag round\">\r\n              <img (click)=\"openImagePopup(selectPic)\" class=\"img-fluid rounded\"  src=\"{{selectPic.sourcePath}}\"/>\r\n            </div>\r\n            <span class=\"cross\" (click)=\"resetCurrentObject(selectPic)\">&#x2DF;</span>\r\n        </div>\r\n        \r\n      </div>      \r\n    </div>\r\n\r\n    <app-allotment-console (finalPostDone)=\"onCopyOperationComplete($event)\" (finalPostStarted)=\"openDataPostModal($event)\" (onCreateNewContainerRequest)=\"openCreateFolderPopup()\"  [toPostResourceList]=\"getModifiedResourceList(true)\" [allContainers]=\"givenContainers\" class=\"col\" \r\n    *ngIf=\"(getModifiedResourceList(true)).length>0 && !createResourceContainerPopupOpen\" ></app-allotment-console>\r\n\r\n    <div class=\"w-100\"></div>    \r\n  </div>\r\n</div>\r\n    <!-- -->   \r\n</div>\r\n</div>\r\n<app-create-resource-container (onCloseWindow)=\"closeCreateFolderPopup()\" *ngIf=\"createResourceContainerPopupOpen\"></app-create-resource-container>\r\n<app-resource-zoom (click)=\"closeImagePopup()\" [popupImageObject]=\"popupImageObject\" *ngIf=\"popupOpen\"></app-resource-zoom>\r\n<app-data-post-modal *ngIf=\"dataPostModalOpen\" (onReInitApp)=\"initAction()\" [statusObject]=\"crDataPostStatusObject\"></app-data-post-modal>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mock_data_provider_service__ = __webpack_require__("../../../../../src/app/services/mock-data-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__ = __webpack_require__("../../../../../src/app/services/common-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.sourceImageRoot = '';
        this.popupOpen = false;
        this.dataPostModalOpen = false;
        this.createResourceContainerPopupOpen = false;
        this.crDataPostObject = null;
        this.popupImageObject = null;
        this.crDataPostStatusObject = { heading: "", subheading: "", type: '' };
        this.CurrentSelectedObjects = [];
        this.signedIn = false;
        this.localImagePool = [];
        this.givenContainers = { outbox: [], model: [] };
        this.mockInitialData = [];
        if ("dev" === __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].getEnvironment()) {
            this.sourceImageRoot = __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].adjustDevProdEnv();
        }
    }
    AppComponent.prototype.updateCategories = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].getCategoryList(this.http, 'outbox', function (jsonData) {
            _this.givenContainers.outbox = jsonData;
        }, function () {
        });
        __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].getCategoryList(this.http, 'model', function (jsonData) {
            _this.givenContainers.model = jsonData;
        }, function () {
        });
    };
    AppComponent.prototype.initAction = function () {
        var _this = this;
        this.popupOpen = false;
        this.dataPostModalOpen = false;
        this.crDataPostObject = null;
        this.popupImageObject = null;
        this.crDataPostStatusObject = { heading: "", subheading: "", type: '' };
        __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].getResourceList(this.http, function (jsonData) {
            var outputARray = [];
            jsonData.forEach(function (p, n) {
                var orig = '' + p.uri;
                p.uri = p.uri.replace('./', '/');
                p.uri = _this.sourceImageRoot + p.uri;
                var ro = { uniq_id: n, width: 0, originSourcePath: orig, height: 0, loaded: false, name: p.name, sourcePath: p.uri, targetPath: "", opted: false, isDir: p.isDir };
                outputARray.push(ro);
            });
            _this.localImagePool = outputARray;
        }, function (error) {
        });
        this.updateCategories();
    };
    AppComponent.prototype.onResourceImageLoad = function ($im) {
        var picTag = document.querySelectorAll('.image-pool .resource-box-image').item($im);
        picTag.classList.add('image-loaded');
    };
    AppComponent.prototype.onCopyOperationComplete = function (obj) {
        this.crDataPostStatusObject = obj;
    };
    AppComponent.prototype.openDataPostModal = function (eventObject) {
        this.crDataPostStatusObject = {
            heading: eventObject.resourcePathList.length + " Resources are ready to be copied",
            subheading: "Please wait while files are processing",
            type: ''
        };
        this.dataPostModalOpen = true;
        this.crDataPostObject = eventObject;
    };
    AppComponent.prototype.closeDataPostModal = function () {
        this.dataPostModalOpen = false;
    };
    AppComponent.prototype.openImagePopup = function (pic) {
        this.popupOpen = true;
        this.popupImageObject = pic;
    };
    AppComponent.prototype.closeImagePopup = function () {
        this.popupOpen = false;
        this.popupImageObject = null;
    };
    AppComponent.prototype.openCreateFolderPopup = function () {
        this.createResourceContainerPopupOpen = true;
    };
    AppComponent.prototype.closeCreateFolderPopup = function () {
        this.createResourceContainerPopupOpen = false;
        this.updateCategories();
    };
    AppComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].masterConfig.mockDataRequired) {
            this.mockInitialData = __WEBPACK_IMPORTED_MODULE_2__services_mock_data_provider_service__["a" /* MockDataProviderService */].getMockData();
            this.localImagePool = this.mockInitialData;
        }
        this.initAction();
    };
    AppComponent.prototype.evalImageProp = function (event) {
        var img = event.currentTarget;
    };
    AppComponent.prototype.getModifiedResourceList = function (opt) {
        return __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].getRevisedArray(this.localImagePool, opt);
    };
    AppComponent.prototype.resetCurrentSelectedObject = function () {
        __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].resetAllResources(this.localImagePool);
    };
    AppComponent.prototype.setCurrentObject = function (obj, isDir) {
        if (!isDir) {
            obj.opted = true;
        }
    };
    AppComponent.prototype.resetCurrentObject = function (obj) {
        obj.opted = false;
    };
    AppComponent.prototype.loginStatusChange = function (profile) {
        this.signedIn = true;
    };
    AppComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_3__services_common_util_service__["a" /* CommonUtilService */].removeUserFromLocalStorage();
        this.signedIn = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comps_allotment_console_allotment_console_component__ = __webpack_require__("../../../../../src/app/comps/allotment-console/allotment-console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comps_resource_zoom_resource_zoom_component__ = __webpack_require__("../../../../../src/app/comps/resource-zoom/resource-zoom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comps_data_post_modal_data_post_modal_component__ = __webpack_require__("../../../../../src/app/comps/data-post-modal/data-post-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comps_signin_signin_component__ = __webpack_require__("../../../../../src/app/comps/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comps_create_resource_container_create_resource_container_component__ = __webpack_require__("../../../../../src/app/comps/create-resource-container/create-resource-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__comps_allotment_console_allotment_console_component__["a" /* AllotmentConsoleComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comps_resource_zoom_resource_zoom_component__["a" /* ResourceZoomComponent */],
            __WEBPACK_IMPORTED_MODULE_7__comps_data_post_modal_data_post_modal_component__["a" /* DataPostModalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__comps_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_9__comps_create_resource_container_create_resource_container_component__["a" /* CreateResourceContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comps/allotment-console/allotment-console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-sub-item a{\r\n    margin-right:5px;\r\n    margin-top:40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/allotment-console/allotment-console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col form-panel\"  >\r\n      <div *ngIf=\"lastActiveContainer===null\">\r\n      <h4>Allotment options</h4>\r\n      <p>Please <a class=\"\" (click)=\"openCreateFolderPopup()\" href=\"#\">create new resource</a> containers if needed </p>\r\n      <hr/>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input [(ngModel)]=\"category\" class=\"form-check-input\" type=\"radio\" name=\"categoryType\" id=\"categoryType1\" value=\"outbox\" checked>\r\n                OutBox\r\n              </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"form-check\">\r\n              <label class=\"form-check-label\">\r\n                <input [(ngModel)]=\"category\" class=\"form-check-input\" type=\"radio\" name=\"categoryType\" id=\"categoryType2\" value=\"model\" checked>\r\n                Model\r\n              </label>\r\n            </div>\r\n        </div>\r\n      </div>  \r\n      <hr/>\r\n    </div>\r\n     <div *ngIf=\"lastActiveContainer!==null\" class=\"alert alert-warning\" role=\"alert\">\r\n      <span>Chosen target :<strong> {{lastActiveContainer.name}}</strong>\r\n      <strong *ngIf=\"this.lastActiveSubfolderName\">{{\" / \"+this.lastActiveSubfolderName}}</strong></span>\r\n      <p>So your selected resources will move to the chosen category. To change the decision you can \r\n      <a (click)=\"resetActiveContaine()\" href=\"#\">Cancel</a> the selection</p>\r\n     </div>\r\n\r\n      <form *ngIf=\"lastActiveContainer==null\" name=\"auto-complete-search\">\r\n        <div class=\"form-group\">\r\n          <input id=\"autoCompleteText\" name=\"autoCompleteText\" [(ngModel)]=\"autoCompleteText\" type=\"search\" class=\"form-control\" placeholder=\"Folder name\">\r\n        </div>\r\n      </form>    \r\n      <!-- AUTO COMPLETE LIST :START-->\r\n      <div *ngIf=\"lastActiveContainer==null\">\r\n        <div *ngFor=\"let listitem of (getAutoCompleteList())\">\r\n          <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a class=\"btn btn-dark btn-sm\" href=\"#\" (click)=\"setActiveContainer(listitem,null)\">{{listitem.name}}</a></li>            \r\n          </ol>\r\n          <ol *ngFor=\"let subItem of listitem.childrenDetails\" class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a>{{listitem.name}}</a></li>\r\n            <li class=\"breadcrumb-item\"><a class=\"btn btn-dark btn-sm\"  href=\"#\" (click)=\"setActiveContainer(listitem,subItem)\">{{subItem}}</a></li>\r\n          </ol> \r\n        </div>  \r\n      </div>\r\n      <!-- AUTO COMPLETE LIST :END-->\r\n<hr/>\r\n      <div class=\"btn-group WText\" *ngIf=\"lastActiveContainer!==null\">\r\n        <a (click)=\"finalPost()\" href=\"#\" class=\"btn btn-success \">Done</a>\r\n        \r\n      </div>\r\n      \r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/comps/allotment-console/allotment-console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllotmentConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__ = __webpack_require__("../../../../../src/app/services/common-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllotmentConsoleComponent = (function () {
    function AllotmentConsoleComponent(http) {
        this.http = http;
        this.finalPostStarted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.finalPostDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onCreateNewContainerRequest = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.category = "outbox";
        this.autoCompleteText = "";
        this.lastActiveContainer = null;
        this.listOfContainers = [];
        this.lastActiveSubfolderName = null;
    }
    AllotmentConsoleComponent.prototype.ngOnInit = function () {
    };
    AllotmentConsoleComponent.prototype.getActiveClass = function (folder) {
        return folder.opted ? "active" : "";
    };
    AllotmentConsoleComponent.prototype.openCreateFolderPopup = function () {
        this.onCreateNewContainerRequest.emit('open');
    };
    AllotmentConsoleComponent.prototype.getFinalRPO = function () {
        var crPostObject, arr = [], path = this.lastActiveSubfolderName ? this.lastActiveContainer.path + "/" + this.lastActiveSubfolderName : this.lastActiveContainer.path;
        this.toPostResourceList.forEach(function (p) {
            arr.push(p.originSourcePath);
        });
        crPostObject = { target: path, resourcePathList: arr };
        return crPostObject;
    };
    AllotmentConsoleComponent.prototype.finalPost = function () {
        var _this = this;
        var postObservableObj;
        var crPostObject = this.getFinalRPO();
        this.finalPostStarted.emit(crPostObject);
        var requestPath = __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].masterConfig.connection.serviceRequestHost + __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].masterConfig.serviceURI.toCopy;
        postObservableObj = this.http.post(requestPath, crPostObject);
        postObservableObj.subscribe(function (jsonResponseData) {
            var stHeading = ":) Done!", stDesc = "Copying of " + jsonResponseData.copyComplete + " files successfully done!";
            if (jsonResponseData.masterErrorObject.targetFolderStatus) {
                stHeading = "Target folder is not available";
            }
            if (jsonResponseData.masterErrorObject.sourcefileIntactness) {
                if (jsonResponseData.masterErrorObject.sourcefileIntactness.length > 0) {
                    stHeading = "Problem in some files";
                    stDesc = "Please check the list";
                }
            }
            _this.finalPostDone.emit({ heading: stHeading, subheading: stDesc, type: 'completed' });
        }, function (error) {
            _this.finalPostDone.emit({ heading: "Problem in connection", subheading: "Please check connection", type: 'completed' });
        });
    };
    AllotmentConsoleComponent.prototype.resetActiveContaine = function () {
        this.lastActiveSubfolderName = null;
        this.lastActiveContainer = null;
    };
    AllotmentConsoleComponent.prototype.setActiveContainer = function (folder, subfolderName) {
        var selectAction = true;
        this.lastActiveSubfolderName = null;
        if (this.lastActiveContainer !== null) {
            if (this.lastActiveContainer.name === folder.name) {
                this.lastActiveContainer.opted = false;
                selectAction = false;
                this.lastActiveContainer = null;
            }
        }
        if (selectAction) {
            if (this.lastActiveContainer !== null) {
                this.lastActiveContainer.opted = false;
            }
            this.lastActiveContainer = folder;
            this.lastActiveSubfolderName = subfolderName;
            this.lastActiveContainer.opted = true;
        }
    };
    AllotmentConsoleComponent.prototype.getAutoCompleteList = function () {
        return __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].getMatchedContainers(this.allContainers[this.category], this.autoCompleteText);
    };
    return AllotmentConsoleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AllotmentConsoleComponent.prototype, "allContainers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], AllotmentConsoleComponent.prototype, "toPostResourceList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], AllotmentConsoleComponent.prototype, "finalPostStarted", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], AllotmentConsoleComponent.prototype, "finalPostDone", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _c || Object)
], AllotmentConsoleComponent.prototype, "onCreateNewContainerRequest", void 0);
AllotmentConsoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-allotment-console',
        template: __webpack_require__("../../../../../src/app/comps/allotment-console/allotment-console.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/allotment-console/allotment-console.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
], AllotmentConsoleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=allotment-console.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/create-resource-container/create-resource-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-container-wrap{\r\n    position:fixed;\r\n    top:0px;\r\n    left:0px;\r\n    width:100%;\r\n    height: 100%;\r\n    overflow-y: scroll;\r\n    /*background:rgba(0,0,0,0.9);*/\r\n    background:rgba(255,255,255,0.98);\r\n}\r\n\r\n.breadcrumb-item-wide{\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.breadcrumb-item input{\r\n    font-size:14px;\r\n    border-radius:8px;\r\n    border:1px solid #888;\r\n    padding: 4px;\r\n}\r\n\r\nol.breadcrumb.duplicate input{\r\nbackground: linear-gradient(to bottom, #ff3019 0%,#cf0404 100%);\r\ncolor:white;\r\nfont-weight:bold;\r\nborder:1px solid #ff3019;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/create-resource-container/create-resource-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-container-wrap\">\r\n  <!-- AUTO COMPLETE LIST :START-->\r\n      <div class=\"container\">\r\n      <br/>  \r\n      <h3>Create new </h3>   \r\n      <div class=\"btn-group\">\r\n        <a href=\"#\" class=\"btn btn-success btn-sm {{activeState.outbox}}\" (click)=\"setSelectedContainer('outbox')\">Outbox</a>\r\n        <a href=\"#\" class=\"btn btn-success btn-sm {{activeState.model}}\" (click)=\"setSelectedContainer('model')\">Model</a>\r\n        \r\n      </div>\r\n      <span> &nbsp; Chosen conatiner is {{selectedContainer}}. You can <a href=\"#\" (click)=\"close()\">cancel</a> the operation.</span>\r\n      <br/><br/>\r\n      <div>\r\n       <form class=\"form-inline\">\r\n          <div class=\"form-group mx-sm-3\">\r\n            <input [(ngModel)]=\"rootLevelFolderName\" type=\"text\" class=\"form-control form-control-sm\" name=\"root-level-folder-name\" id=\"root-level-folder-name\" placeholder=\"Root level folder\">\r\n          </div>\r\n          <button *ngIf=\"(rootLevelFolderName.trim()).length!==0\" (click)=\"requestToCreateNewContainer(true)\" class=\"btn btn-success btn-sm\">Create</button>\r\n        </form> \r\n      </div>\r\n\r\n      </div>\r\n      <br/>\r\n      <div class=\"container\" *ngIf=\"selectedContainer!==null\">\r\n        <div *ngFor=\"let listitem of (getAutoCompleteList()); let i = index;\">\r\n          <ol class=\"breadcrumb main-breadcrumb {{getDuplicateSubfolderClass(listitem)}}\" *ngIf=\"listitem.isDir\" >\r\n            <li class=\"breadcrumb-item\">\r\n              <a class=\"btn btn-info btn-sm\" href=\"#\">{{listitem.name}}</a>              \r\n            </li>\r\n            \r\n            <li class=\"breadcrumb-item\">\r\n              <input [(ngModel)]=\"newFolderName[listitem.name]\" id=\"folder-name-{{listitem.name}}\" name=\"folder-name-{{listitem.name}}\"  style=\"width:200px;\" type=\"text\"/>\r\n            </li>\r\n            <li *ngIf=\"folderAddButtonShow(listitem.name)\" class=\"breadcrumb-item\">\r\n              <a (click)=\"requestToCreateNewContainer()\" class=\"btn btn-success btn-sm\" href=\"#\">+</a>\r\n            </li>\r\n          </ol>\r\n          <ol *ngFor=\"let subItem of listitem.childrenDetails\" class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\"><a>{{listitem.name}}</a></li>\r\n            <li class=\"breadcrumb-item\">{{subItem}}</li>\r\n          </ol> \r\n        </div>  \r\n      </div>\r\n      <!-- AUTO COMPLETE LIST :END-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/create-resource-container/create-resource-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateResourceContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__ = __webpack_require__("../../../../../src/app/services/common-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateResourceContainerComponent = (function () {
    function CreateResourceContainerComponent(http) {
        this.http = http;
        this.onCloseWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.selectedContainer = 'model';
        this.fn = "";
        this.newFolderName = {};
        this.rootLevelFolderName = "";
        this.completeFolderList = {
            outbox: [],
            model: []
        };
        this.activeState = { outbox: '', model: 'active' };
    }
    CreateResourceContainerComponent.prototype.getNonEmptyNameObject = function () {
        var v, obj = {};
        for (var crEL in this.newFolderName) {
            v = this.newFolderName[crEL].trim();
            if (v.length > 0) {
                obj[crEL] = v;
            }
        }
        return obj;
    };
    CreateResourceContainerComponent.prototype.folderAddButtonShow = function (listitemName) {
        var r = (this.getNonEmptyNameObject())[listitemName] ? true : false;
        return r;
    };
    CreateResourceContainerComponent.prototype.requestToCreateNewContainer = function () {
        var _this = this;
        var crEL, toPostData = {}, requestPath = __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].masterConfig.connection.serviceRequestHost + '/' + 'service/jobs/createnewfolder';
        if (arguments.length > 0) {
            toPostData['rootLevelFolderName'] = this.selectedContainer + '/' + this.rootLevelFolderName;
            console.log(toPostData);
        }
        else {
            toPostData = this.getNonEmptyNameObject();
            for (crEL in toPostData) {
                toPostData[crEL] = this.selectedContainer + '/' + crEL + '/' + toPostData[crEL];
            }
        }
        if (Object.keys(toPostData).length > 0) {
            this.folderCreationObservable = this.http.post(requestPath, toPostData);
            this.folderCreationObservable.subscribe(function (jsonData) {
                _this.initAction();
            }, function (errorObj) {
                alert('some problem happend');
            });
        }
    };
    CreateResourceContainerComponent.prototype.close = function () {
        this.onCloseWindow.emit('close');
    };
    CreateResourceContainerComponent.prototype.setSelectedContainer = function (containerName) {
        this.selectedContainer = containerName;
        if (containerName === 'outbox') {
            this.activeState.outbox = 'active';
            this.activeState.model = '';
        }
        else {
            this.activeState.outbox = '';
            this.activeState.model = 'active';
        }
    };
    CreateResourceContainerComponent.prototype.getDuplicateSubfolderClass = function (listItem) {
        if (this.newFolderName[listItem.name]) {
            var av = listItem.childrenDetails.indexOf(this.newFolderName[listItem.name].trim());
            if (av !== -1) {
                return "duplicate";
            }
        }
        return '';
    };
    CreateResourceContainerComponent.prototype.getAutoCompleteList = function () {
        //console.log(this.completeFolderList[this.selectedContainer]);
        return this.completeFolderList[this.selectedContainer];
    };
    CreateResourceContainerComponent.prototype.initAction = function () {
        var _this = this;
        this.newFolderName = {};
        this.rootLevelFolderName = '';
        __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].getCategoryList(this.http, 'model', function (resultArray) {
            _this.completeFolderList.model = resultArray;
        }, function (error) {
        });
        __WEBPACK_IMPORTED_MODULE_2__services_common_util_service__["a" /* CommonUtilService */].getCategoryList(this.http, 'outbox', function (resultArray) {
            _this.completeFolderList.outbox = resultArray;
        }, function (error) {
        });
    };
    CreateResourceContainerComponent.prototype.ngOnInit = function () {
        this.initAction();
    };
    return CreateResourceContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], CreateResourceContainerComponent.prototype, "onCloseWindow", void 0);
CreateResourceContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-create-resource-container',
        template: __webpack_require__("../../../../../src/app/comps/create-resource-container/create-resource-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/create-resource-container/create-resource-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], CreateResourceContainerComponent);

var _a, _b;
//# sourceMappingURL=create-resource-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/data-post-modal/data-post-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-preload-wrap{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background:rgba(0,0,0,0.95);\r\n    top:0px;\r\n    left:0px;\r\n}\r\n\r\n.post-preload-content{\r\n    width:60%;\r\n    margin: 15% auto;\r\n    position: relative;\r\n    color:white;\r\n    \r\n}\r\n\r\n.post-preload-content h3,.post-preload-content small{\r\n    text-align: center;\r\n}\r\n\r\n\r\n.common-preloader{\r\n  display: block;\r\n  width:120px;\r\n  height:20px;\r\n  margin:0 auto;\r\n}\r\n\r\n.common-preloader .circle-conatiner{\r\n  width: 22px;\r\n  height: 22px;\r\n  display: inline-block;\r\n  -webkit-animation-name:common-preloader-animation;\r\n          animation-name:common-preloader-animation;\r\n  animation-duration: 2s; \r\n  -webkit-animation-delay: 1s; \r\n          animation-delay: 1s;\r\n  animation-iteration-count:infinite;\r\n  -webkit-animation-name:example;\r\n  -webkit-animation-duration: 2s; \r\n  -webkit-animation-delay: 0s;\r\n  -webkit-animation-iteration-count:infinite;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n2{\r\n  animation-delay: .5s;\r\n  -webkit-animation-delay: .5s;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n3{\r\n  animation-delay: 1s;\r\n  -webkit-animation-delay: 1s;\r\n}\r\n\r\n.common-preloader .circle-conatiner.n4{\r\n  animation-delay: 1.5s;\r\n  -webkit-animation-delay: 1.5s;\r\n}\r\n\r\n.common-preloader .circle-conatiner svg{\r\n  width:22px;\r\n  height:22px;\r\n}\r\n\r\n.common-preloader .circle-conatiner svg circle{\r\n  fill:rgba(255,255,255,0.9);\r\n  stroke:rgba(0,0,0,0);\r\n  stroke-width:2px; \r\n  cx:11;\r\n  cy:11;\r\n  r:10;\r\n}\r\n\r\n\r\n.count-down-preloader{\r\n  width:80px;\r\n  padding: 10px;\r\n  border-radius:10px;\r\n  background: rgba(0,0,0,0.5); \r\n  margin: 5px auto;\r\n}\r\n\r\n.count-down-preloader span{\r\ndisplay: block;\r\n}\r\n\r\n.count-down-preloader span.digit{\r\n color:white;\r\n font-size:20px; \r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n@-webkit-keyframes example {\r\n    0% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n    50% {-webkit-transform:translateY(30px) scale(0.9);transform:translateY(30px) scale(0.9);}\r\n    100% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n}\r\n\r\n/* Standard syntax */\r\n@keyframes example {\r\n    0% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n    50% {-webkit-transform:translateY(30px) scale(0.9);transform:translateY(30px) scale(0.9);}\r\n    100% {-webkit-transform:translateY(0px) scale(1);transform:translateY(0px) scale(1);}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/data-post-modal/data-post-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post-preload-wrap\">\r\n  <div class=\"post-preload-content\">\r\n    <h3>{{statusObject.heading}}</h3>\r\n    <p style=\"text-align:center;\">{{statusObject.subheading}}</p>\r\n    \r\n    <div class=\"common-preloader\" *ngIf=\"statusObject.type!=='completed'\">\r\n      <div class=\"circle-conatiner n1\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n2\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n3\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n      <div class=\"circle-conatiner n4\">\r\n          <svg><circle /></svg>    \r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"statusObject.type==='completed'\" style=\"text-align:center;\">\r\n        <button (click)=\"reInitApp()\" class=\"btn btn-sm btn-success\">Ok! got it. Go for other resources</button>\r\n    </div>        \r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/comps/data-post-modal/data-post-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPostModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__ = __webpack_require__("../../../../../src/app/shared/datatypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datatypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_datatypes__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataPostModalComponent = (function () {
    function DataPostModalComponent() {
        this.onReInitApp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DataPostModalComponent.prototype.ngOnInit = function () {
    };
    DataPostModalComponent.prototype.reInitApp = function () {
        this.onReInitApp.emit('init again');
    };
    return DataPostModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__["RequestStatusObject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__["RequestStatusObject"]) === "function" && _a || Object)
], DataPostModalComponent.prototype, "statusObject", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], DataPostModalComponent.prototype, "onReInitApp", void 0);
DataPostModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-data-post-modal',
        template: __webpack_require__("../../../../../src/app/comps/data-post-modal/data-post-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/data-post-modal/data-post-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DataPostModalComponent);

var _a, _b;
//# sourceMappingURL=data-post-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/resource-zoom/resource-zoom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zoom-wrap{\r\n    position:fixed;\r\n    top:0px;\r\n    left:0px;\r\n    width:100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.8);\r\n    z-index:90; \r\n}\r\n\r\n.zoom-image-container{\r\n    padding:5.67rem;\r\n    width: 100%;\r\n    height: 100%; \r\n    text-align: center;\r\n}\r\n\r\n.zoom-image-container img{\r\n     width: auto;\r\n     height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/resource-zoom/resource-zoom.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"zoom-wrap\" *ngIf=\"popupImageObject!==null\">\r\n  <div class=\"zoom-image-container\">\r\n    <img class=\"round\" src=\"{{popupImageObject.sourcePath}}\"/>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/resource-zoom/resource-zoom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceZoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__ = __webpack_require__("../../../../../src/app/shared/datatypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_datatypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_datatypes__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResourceZoomComponent = (function () {
    function ResourceZoomComponent() {
    }
    ResourceZoomComponent.prototype.ngOnInit = function () {
    };
    return ResourceZoomComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__["ResourceObject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_datatypes__["ResourceObject"]) === "function" && _a || Object)
], ResourceZoomComponent.prototype, "popupImageObject", void 0);
ResourceZoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-resource-zoom',
        template: __webpack_require__("../../../../../src/app/comps/resource-zoom/resource-zoom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/resource-zoom/resource-zoom.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResourceZoomComponent);

var _a;
//# sourceMappingURL=resource-zoom.component.js.map

/***/ }),

/***/ "../../../../../src/app/comps/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signin-wrapper-bg{\r\n   position:fixed;\r\n   top:0px;\r\n   left:0px;\r\n   width: 100%;\r\n   height:100%; \r\n   background:#000;\r\n   \r\n}\r\n\r\n.bg-image-container{\r\n    background: url('http://bit.ly/2yarZ9z') no-repeat center center;\r\n    background-size:110% auto; \r\n    position: absolute;\r\n    top:0px;\r\n    left:0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n    -webkit-filter: blur(10px);\r\n    \r\n}\r\n\r\n.signin-wrapper-bg .container{\r\n  position: relative;\r\n  width: 480px;\r\n  margin: 120px auto;\r\n  z-index: 1;\r\n}\r\n\r\n.signin-wrapper-bg .container h4{\r\n    color:white;\r\n}\r\n\r\n.signin-wrapper-bg .brand-header{\r\ncolor:white;\r\nfont-weight: normal;\r\n}\r\n\r\n.signin-form-wrapper label,.signin-form-wrapper small{\r\n color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comps/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"signin-wrapper-bg\">\r\n<div class=\"bg-image-container\"></div>  \r\n<div class=\"container\">\r\n  <h1 class=\"brand-header\">Resource Allotment</h1>\r\n  <h4>Signin Please</h4>\r\n  <div class=\"signin-form-wrapper\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input [(ngModel)]=\"crProfile.userName\" type=\"email\" class=\"form-control\" id=\"userName\" name=\"username\" aria-describedby=\"emailHelp\" placeholder=\"username\">      \r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input [(ngModel)]=\"crProfile.password\" type=\"password\" class=\"form-control\" name=\"password\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n   \r\n    <input (click)=\"loginStatus()\" type=\"button\" class=\"btn btn-light\" value=\"Signin\"/>\r\n  </form>\r\n  \r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comps/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_common_util_service__ = __webpack_require__("../../../../../src/app/services/common-util.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent() {
        this.onSigninSuccessful = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.crProfile = { userName: '', password: '' };
        this.profiles = [
            { userName: 'admin', password: 'admin' },
            { userName: 'iqx', password: 'iqx' }
        ];
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__services_common_util_service__["a" /* CommonUtilService */].getUserFromLocalStorage()) {
            this.onSigninSuccessful.emit(this.crProfile);
        }
    };
    SigninComponent.prototype.authenticateProfile = function () {
        var _this = this;
        var success = false;
        this.profiles.forEach(function (prf) {
            if (!success) {
                if (prf.userName === _this.crProfile.userName && prf.password === _this.crProfile.password) {
                    success = true;
                }
            }
        });
        return success;
    };
    SigninComponent.prototype.loginStatus = function () {
        if (this.authenticateProfile()) {
            __WEBPACK_IMPORTED_MODULE_1__services_common_util_service__["a" /* CommonUtilService */].setUserFromLocalStorage();
            this.onSigninSuccessful.emit(this.crProfile);
        }
    };
    return SigninComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], SigninComponent.prototype, "onSigninSuccessful", void 0);
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/comps/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comps/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/common-util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonUtilService = (function () {
    function CommonUtilService() {
        console.log;
    }
    CommonUtilService.getUserFromLocalStorage = function () {
        var raAuth = window.localStorage.getItem('resource-allotment-auth');
        if (raAuth === '1') {
            return true;
        }
        else {
            return false;
        }
    };
    CommonUtilService.setUserFromLocalStorage = function () {
        window.localStorage.setItem('resource-allotment-auth', '1');
    };
    CommonUtilService.removeUserFromLocalStorage = function () {
        window.localStorage.removeItem('resource-allotment-auth');
    };
    CommonUtilService.getCategoryList = function (http, categoryName, success, error) {
        var requestPath = this.masterConfig.connection.serviceRequestHost + '/service/basic-list/' + categoryName;
        http.get(requestPath).subscribe(function (jsonData) {
            var resultArray = [];
            for (var el in jsonData) {
                resultArray.push({ name: jsonData[el].name, children: jsonData[el].subfolderData.length, path: jsonData[el].uri, opted: false, childrenDetails: jsonData[el].subfolderData, isDir: jsonData[el].directory });
            }
            success(resultArray);
        });
    };
    CommonUtilService.getResourceList = function (http, success, error) {
        var requestPath = this.masterConfig.connection.serviceRequestHost + '/service/basic-list/source';
        http.get(requestPath).subscribe(function (jsonData) {
            success(jsonData);
        });
    };
    CommonUtilService.getEnvironment = function () {
        var env = "dev";
        if (window.location.host === this.masterConfig.connection.locationHost) {
            env = "prod";
        }
        return env;
    };
    CommonUtilService.resetAllResources = function (rootData) {
        rootData.forEach(function (n, p) {
            n.opted = false;
        });
    };
    CommonUtilService.getRevisedArray = function (rootData, opted) {
        var resultArray = [];
        rootData.forEach(function (n, p) {
            if (n.opted === opted) {
                resultArray.push(n);
            }
        });
        return resultArray;
    };
    CommonUtilService.getMatchedContainers = function (list, matchString) {
        var listName, arr = [];
        matchString = matchString.toLowerCase();
        if (matchString.trim().length === 0) {
            arr = list;
        }
        else {
            list.forEach(function (p) {
                listName = p.name.toLowerCase();
                if (listName.indexOf(matchString) !== -1) {
                    arr.push(p);
                }
                else {
                    p.childrenDetails.forEach(function (subEl) {
                        if (subEl.indexOf(matchString) !== -1) {
                            arr.push(p);
                        }
                    });
                }
            });
        }
        return arr;
    };
    CommonUtilService.adjustDevProdEnv = function () {
        this.masterConfig.connection.serviceRequestHost = "http://" + this.masterConfig.connection.locationHost;
        return this.masterConfig.connection.serviceRequestHost;
    };
    return CommonUtilService;
}());
CommonUtilService.masterConfig = {
    mockDataRequired: false,
    connection: {
        locationHost: "localhost:3000",
        serviceRequestHost: ""
    },
    serviceURI: {
        toCopy: '/service/jobs/mastercopy'
    }
};
CommonUtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CommonUtilService);

//# sourceMappingURL=common-util.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mock-data-provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockDataProviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockDataProviderService = (function () {
    function MockDataProviderService() {
    }
    MockDataProviderService.getMockData = function () {
        var mockData = [
            { isDir: false, name: '', originSourcePath: "", uniq_id: 0, width: 0, height: 0, loaded: false, sourcePath: "https://cdn.thinglink.me/api/image/724116666635517952/1240/10/scaletowidth", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 1, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2a2BKbI", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 2, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2wuDrII", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 3, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xYEAvO", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 4, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xP4en6", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 5, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xZyUBX", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 6, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xOezzC", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 7, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2wuDCUo", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 8, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xQEKDn", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 9, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2g7uIX0", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 10, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2hHLTSz", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 11, width: 0, height: 0, loaded: false, sourcePath: "http://images.indianexpress.com/2016/08/rrain-759.jpg", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 12, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xPbCiq", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 13, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2xdmqqW", targetPath: "", opted: false },
            { isDir: false, name: '', originSourcePath: "", uniq_id: 14, width: 0, height: 0, loaded: false, sourcePath: "http://bit.ly/2fI6cej", targetPath: "", opted: false }
        ];
        return mockData;
    };
    return MockDataProviderService;
}());
MockDataProviderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MockDataProviderService);

//# sourceMappingURL=mock-data-provider.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/datatypes.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=datatypes.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map