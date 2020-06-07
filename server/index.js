/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./apis/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/$controllers.ts":
/*!******************************!*\
  !*** ./apis/$controllers.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* eslint-disable */\nvar _controller_1 = __importDefault(__webpack_require__(/*! ./@controller */ \"./apis/@controller.ts\"));\nvar _controller_2 = __importDefault(__webpack_require__(/*! ./tasks/@controller */ \"./apis/tasks/@controller.ts\"));\nvar _controller_3 = __importDefault(__webpack_require__(/*! ./tasks/_taskId@number/@controller */ \"./apis/tasks/_taskId@number/@controller.ts\"));\nexports.default = {\n    name: '/',\n    controller: _controller_1.default,\n    children: {\n        names: [\n            {\n                name: '/tasks',\n                controller: _controller_2.default,\n                children: {\n                    value: {\n                        name: '/_taskId@number',\n                        controller: _controller_3.default\n                    }\n                }\n            }\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./apis/$controllers.ts?");

/***/ }),

/***/ "./apis/@controller.ts":
/*!*****************************!*\
  !*** ./apis/@controller.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar frourio_1 = __webpack_require__(/*! frourio */ \"frourio\");\nexports.default = frourio_1.createController({\n    get: function () { return ({ status: 200, body: 'Hello, world!' }); }\n});\n\n\n//# sourceURL=webpack:///./apis/@controller.ts?");

/***/ }),

/***/ "./apis/@repos/tasks.ts":
/*!******************************!*\
  !*** ./apis/@repos/tasks.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.taskRepository = void 0;\nvar fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nvar filename = 'database.json';\nif (!fs_1.default.existsSync(filename)) {\n    fs_1.default.writeFileSync(filename, '[]', 'utf-8');\n}\nvar readFile = function () { return __awaiter(void 0, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {\n    switch (_c.label) {\n        case 0:\n            _b = (_a = JSON).parse;\n            return [4 /*yield*/, fs_1.default.promises.readFile(filename, 'utf-8')];\n        case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];\n    }\n}); }); };\nvar writeFile = function (newTasks) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    switch (_a.label) {\n        case 0: return [4 /*yield*/, fs_1.default.promises.writeFile(filename, JSON.stringify(newTasks), 'utf-8')];\n        case 1: return [2 /*return*/, _a.sent()];\n    }\n}); }); };\nexports.taskRepository = {\n    getTasks: function () { return readFile(); },\n    createTasks: function (name) { return __awaiter(void 0, void 0, void 0, function () {\n        var tasks, newId, task;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, readFile()];\n                case 1:\n                    tasks = _a.sent();\n                    newId = tasks.length > 0\n                        ? Math.max.apply(Math, __spread(tasks.map(function (task) { return task.id; }))) + 1\n                        : 0;\n                    task = { id: newId, name: name, done: false };\n                    tasks.push(task);\n                    writeFile(tasks);\n                    return [2 /*return*/, task];\n            }\n        });\n    }); },\n    updateTasks: function (updatedTask) { return __awaiter(void 0, void 0, void 0, function () {\n        var tasks;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, readFile()];\n                case 1:\n                    tasks = _a.sent();\n                    tasks = tasks.map(function (task) {\n                        return task.id === updatedTask.id ? updatedTask : task;\n                    });\n                    writeFile(tasks);\n                    return [2 /*return*/];\n            }\n        });\n    }); },\n    deleteTasks: function (taskId) { return __awaiter(void 0, void 0, void 0, function () {\n        var tasks;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, readFile()];\n                case 1:\n                    tasks = _a.sent();\n                    tasks = tasks.filter(function (task) { return task.id !== taskId; });\n                    writeFile(tasks);\n                    return [2 /*return*/];\n            }\n        });\n    }); }\n};\n/*\n  let tasks: Task[] = []\n  export const taskRepository = {\n    getTasks: () => tasks,\n    createTasks: (name: string) => {\n      const newId =\n        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0\n      const task = { id: newId, name, done: false }\n      tasks.push(task)\n      return task\n    },\n    updateTasks: (updatedTask: Task) => {\n      tasks = tasks.map((task) =>\n        task.id === updatedTask.id ? updatedTask : task\n      )\n    },\n    deleteTasks: (taskId: number) => {\n      tasks = tasks.filter((task) => task.id !== taskId)\n    }\n  }\n*/\n\n\n//# sourceURL=webpack:///./apis/@repos/tasks.ts?");

/***/ }),

/***/ "./apis/server.ts":
/*!************************!*\
  !*** ./apis/server.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.server = exports.run = exports.app = exports.router = void 0;\n/* eslint-disable */\nvar os_1 = __webpack_require__(/*! os */ \"os\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar multer_1 = __importDefault(__webpack_require__(/*! multer */ \"multer\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar frourio_1 = __webpack_require__(/*! frourio */ \"frourio\");\nvar _controllers_1 = __importDefault(__webpack_require__(/*! ./$controllers */ \"./apis/$controllers.ts\"));\nexports.router = frourio_1.createRouter(_controllers_1.default, multer_1.default({ dest: os_1.tmpdir(), limits: { fileSize: Math.pow(1024, 3) } }).any());\nexports.app = express_1.default()\n    .use(helmet_1.default())\n    .use(cors_1.default())\n    .use(function (req, res, next) {\n    express_1.default.json()(req, res, function (err) {\n        if (err)\n            return res.sendStatus(400);\n        next();\n    });\n})\n    .use('/api', exports.router);\nexports.run = function (port) {\n    if (port === void 0) { port = 8080; }\n    return new Promise(function (resolve) {\n        var server = exports.app.listen(port, function () {\n            console.log(\"Frourio is running on http://localhost:\" + port);\n            resolve(server);\n        });\n    });\n};\nexports.server = exports.run();\n\n\n//# sourceURL=webpack:///./apis/server.ts?");

/***/ }),

/***/ "./apis/tasks/@controller.ts":
/*!***********************************!*\
  !*** ./apis/tasks/@controller.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar frourio_1 = __webpack_require__(/*! frourio */ \"frourio\");\nvar tasks_1 = __webpack_require__(/*! ~/apis/@repos/tasks */ \"./apis/@repos/tasks.ts\");\nexports.default = frourio_1.createController({\n    get: function () { return __awaiter(void 0, void 0, void 0, function () {\n        var _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = {\n                        status: 200\n                    };\n                    return [4 /*yield*/, tasks_1.taskRepository.getTasks()];\n                case 1: return [2 /*return*/, (_a.body = _b.sent(),\n                        _a)];\n            }\n        });\n    }); },\n    post: function (_a) {\n        var body = _a.body;\n        return __awaiter(void 0, void 0, void 0, function () {\n            var task;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, tasks_1.taskRepository.createTasks(body.name)];\n                    case 1:\n                        task = _b.sent();\n                        return [2 /*return*/, { status: 201, body: task }];\n                }\n            });\n        });\n    }\n});\n/*\nawait (await fetch(`http://localhost:8080/api/tasks`, {\n  // 既定のオプションには * が付いています\n        method: \"POST\", // *GET, POST, PUT, DELETE, etc.\n        headers: {\n            \"Content-Type\": \"application/json; charset=utf-8\",\n            // \"Content-Type\": \"application/x-www-form-urlencoded\",\n        },\n        body: JSON.stringify({name: 'hoge'}), // 本文のデータ型は \"Content-Type\" ヘッダーと一致する必要があります\n})).json()\n*/\n\n\n//# sourceURL=webpack:///./apis/tasks/@controller.ts?");

/***/ }),

/***/ "./apis/tasks/_taskId@number/@controller.ts":
/*!**************************************************!*\
  !*** ./apis/tasks/_taskId@number/@controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar frourio_1 = __webpack_require__(/*! frourio */ \"frourio\");\nvar tasks_1 = __webpack_require__(/*! ~/apis/@repos/tasks */ \"./apis/@repos/tasks.ts\");\nexports.default = frourio_1.createController({\n    put: function (_a) {\n        var body = _a.body, params = _a.params;\n        return __awaiter(void 0, void 0, void 0, function () {\n            var task;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        task = {\n                            id: params.taskId,\n                            name: body.name,\n                            done: body.done\n                        };\n                        return [4 /*yield*/, tasks_1.taskRepository.updateTasks(task)];\n                    case 1:\n                        _b.sent();\n                        return [2 /*return*/, { status: 204 }];\n                }\n            });\n        });\n    },\n    delete: function (_a) {\n        var params = _a.params;\n        return __awaiter(void 0, void 0, void 0, function () {\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, tasks_1.taskRepository.deleteTasks(params.taskId)];\n                    case 1:\n                        _b.sent();\n                        return [2 /*return*/, { status: 204 }];\n                }\n            });\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./apis/tasks/_taskId@number/@controller.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "frourio":
/*!**************************!*\
  !*** external "frourio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"frourio\");\n\n//# sourceURL=webpack:///external_%22frourio%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ })

/******/ });