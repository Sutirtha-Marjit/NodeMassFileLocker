webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/normal_folder.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "normal_folder.bb0cfe8688513f2639db.png";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Indie+Flower|Pacifico);", ""]);

// module
exports.push([module.i, "*{\n   font-family: 'Lato', sans-serif; \n}\n\n.open-panel{\n        display:none;\n    }\n\n.WText *{\n    color:white;\n}\n\nhtml,body{\n    height:100%;\n}\n*[class *=\"-resource-panel\"]{\n    /*float:left;*/\n    display:block;\n}\n\n.icon-span-folder{\n    position: relative;\n    display:block;\n    width:80px;\n    height: 85px;\n    background: url(" + __webpack_require__("../../../../../src/assets/normal_folder.png") + ") no-repeat;\n    background-size:100% auto; \n    margin: 0 auto;\n}\n\n.folder-icon-small{\n    display: inline-block;\n    width:30px;\n    height:24px;\n    background:url(" + __webpack_require__("../../../../../src/assets/normal_folder.png") + ") no-repeat;\n    background-size: 100% auto;\n    margin: 0px 10px 0px 0px;\n}\n\n.icon-span-folder>span{\n    display: block;\n    width:100%;\n    text-align: center;\n    position: absolute;\n    left:0px;\n    bottom:2px;\n    font-size: 10px;\n}\n\n.brand-header{\n    font-family: 'Pacifico', cursive;\n}\n\n.scrollable{\n    width:100%;\n    height:100%;\n    overflow-y:auto;\n    overflow-x: hidden;\n}\n\n.container-fluid{\n    padding:0px;\n    margin: 0px;\n    height:100%;\n}\n\n.popupOpen-true,dataPostModalOpen-true{\n    -webkit-filter: blur(20px);\n}\n\n.pic-resource-panel{\n    background:#666;\n    height:100%;\n    width:29.6%;\n    position:fixed;\n    left:0px;\n    top:0px; \n}\n\n.console-resource-panel{\n    min-height:100%;\n    width:70%;\n    margin-left:30%;\n}\n\n.console-resource-panel .container{\n    min-height: 100%;\n}\n\n.selection-panel-header{\n    padding: 0.65rem;\n    color: #888;\n}\n\n.form-panel{\n    padding:0.65rem;\n}\n\n.pic-resource-panel header{\n    padding:0.65rem;\n    text-align: center;\n    }\n\n.pic{\n    width: 31.2%;\n    height:120px;\n    padding: 5px;\n    background: rgba(255,255,255,0.2);\n    margin: 1%;\n    float:left;\n    transition: all 0.3s ease-in-out;\n    \n}\n\n\n.pic:hover{\n    background:  rgba(255,255,255,0.7);\n}\n\n.bag{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    cursor:pointer;\n}\n\n.preview-image-bg{\n    background: #eeeeee;\n   background: linear-gradient(to bottom, #eeeeee 0%,#cccccc 100%);\n   min-height: 100%;\n}\n\n.preview-image{\n    width:100%;\n    height:auto;\n}\n\n.preview-image-container{\n   width: 100%;\n   min-height: 100%;\n   border-radius: 8px;\n   border-color:#ccc; \n\n}\n\n.pic:hover img{\n    -webkit-filter: blur(2px);\n}\n\n\n\n.pic .bag img{\n    width:100%;\n    transition: all 1.5s ease-in-out;\n}\n\n.cross-button{\n    position:absolute;\n    width:40px;\n    height:40px;\n    top:10px;\n    right:10px;\n    background:black;\n    border-radius:1000px;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n}\n\n.cross-button:hover{\n    background:#888;\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg); \n}\n\n.cross-button .cross{\n  border-radius:100px;\n  height:6px;\n  width:30px;   \n  background: white; \n  -webkit-transform: translateY(17px) translateX(5px) rotateZ(45deg); \n          transform: translateY(17px) translateX(5px) rotateZ(45deg);\n}\n\n.cross-button .cross:nth-child(even){\n    -webkit-transform: translateY(11px) translateX(6px) rotateZ(-45deg);\n            transform: translateY(11px) translateX(6px) rotateZ(-45deg);\n}\n\n.app-list.list-group .list-group-item{\n    cursor: pointer;\n    transition: all 0.5s ease-in-out;\n}\n\n.app-list.list-group .list-group-item:hover{\n    background: #DFDFDF;\n    color:#444;\n}\n\n.app-list.list-group .list-group-item.active{\n    background:#333;\n    border-color:#444;\n}\n\n\n.app-list .badge{\n    float:right;\n}\n\n.preview-image-container .pic{\n  position: relative;\n  cursor:none;\n}\n\n.preview-image-container .pic:hover img{\n  -webkit-filter: none;\n}\n\n.preview-image-container .pic .cross{\n  position: absolute;\n  width:40px;\n  height: 40px;\n  border-radius:70px;\n  background:white;\n  top:0px;\n  right:0px; \n  display: block;\n  text-align: center;\n  font-size:30px;\n  padding-top: 3px;\n  color:#979797;\n  cursor: pointer;\n} \n\n.preview-image-container .pic .cross:hover{\n    color:red;\n}\n\n@media screen and (max-width: 1024px){\n    .pic-resource-panel{\n        width: 100%;\n        position:relative; \n    }\n\n    .console-resource-panel{\n        width: 100%;\n        margin-left: 0px;\n    }\n\n    .pic{\n        width:47.5%;\n        height:200px;\n    }\n\n    .open-panel{\n        display:inline-block;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map