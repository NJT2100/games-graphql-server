module.exports =
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\")\n\ndotenv.config()\n\nconst config = {\n    env: \"development\" || false,\n    port: process.env.PORT || 10000,\n    mongoUri: process.env.MONGODB_URI || \n        process.env.MONGO_HOST ||\n        'mongodb://' + (process.env.IP || 'localhost') + ':' +\n        (process.env.MONGO_PORT || '27017') + \n        '/Games',\n    session: {\n        secret: 'sample secret',\n        resave: false,\n        saveUninitialized: true,\n        cookie: {\n            secure: true\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./express.js":
/*!********************!*\
  !*** ./express.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schema */ \"./schema/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()()\n\n// Read static files from 'dist' folder\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, 'dist')))\n\n// Apply middleware\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json())\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({ extended: true }))\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()())\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()())\napp.use(compression__WEBPACK_IMPORTED_MODULE_7___default()())\napp.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()({ contentSecurityPolicy: ( false) ? undefined : false }))\napp.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()(_config_config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].session))\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n    if (err.name === 'UnauthorizedError') {\n        res.status(401).json({\"error\" : err.name + \": \" + err.message})\n    } else if (err) {\n        res.status(400).json({\"error\" : err.name + \": \" + err.message})\n        console.log(err)\n    }\n})\n\n// Enable graphlql Server\nconst server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_9__[\"ApolloServer\"]({\n    schema: _schema__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    cors: true,\n    playground: _config_config__WEBPACK_IMPORTED_MODULE_10__[\"default\"].env === 'development' ? true: false,\n    introspection: true,\n    tracing: true,\n    path: '/'\n})\n\nserver.applyMiddleware({\n    app,\n    path: '/graphql',\n    cors: true,\n    onHealthCheck: () => {\n        new Promise((resolve, reject) => {\n            if (mongoose__WEBPACK_IMPORTED_MODULE_8___default.a.connection.readyState > 0) \n                resolve()\n            else\n                reject()\n        })\n    }\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./express.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ \"./express.js\");\n/* harmony import */ var _models_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/db */ \"./models/db.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n\n\n\n\n_express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, (err) => {\n    if (err) {\n        console.log(err)\n    }\n    console.log(`Server listening on port: ${_config_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port}`)\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/db.js":
/*!**********************!*\
  !*** ./models/db.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected', () => {\n    console.log(`Mongoose connected to ${_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri}`)\n})\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('disconnected', () => {\n    console.log('Mongoose disconected')\n})\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', (err) => {\n    console.log(`Mongoose connection error: ${err}`)\n})\n\nprocess.on('SIGINT', () => {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.close(() => {\n        console.log('Mongoose disconnected through app termination')\n        process.exit(0)\n    })\n})\n\n//# sourceURL=webpack:///./models/db.js?");

/***/ }),

/***/ "./models/switch.model.js":
/*!********************************!*\
  !*** ./models/switch.model.js ***!
  \********************************/
/*! exports provided: Switch, SwitchTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Switch\", function() { return Switch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SwitchTC\", function() { return SwitchTC; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose-mongoose */ \"graphql-compose-mongoose\");\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst SwitchSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n    title: {\n        type: String,\n        trim: true,\n        unique: true\n    },\n    publisher: {\n        type: String,\n        trim: true\n    },\n    developer: {\n        type: String,\n        trim: true\n    },\n    genre: [String],\n    numPlayers: String,\n    msrp: String,\n    releaseDate: String,\n    rating: String,\n    fileSize: String,\n    languages: [String],\n    playModes: [String],\n    overview: {\n        header: String,\n        description: String\n    },\n    link: String,\n    legal: String\n})\n\nconst Switch = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Switch', SwitchSchema)\nconst SwitchTC = Object(graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"composeWithMongoose\"])(Switch)\n\n//# sourceURL=webpack:///./models/switch.model.js?");

/***/ }),

/***/ "./schema/index.js":
/*!*************************!*\
  !*** ./schema/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _switch_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch.schema */ \"./schema/switch.schema.js\");\n\n\nconst schemaComposer = new graphql_compose__WEBPACK_IMPORTED_MODULE_0__[\"SchemaComposer\"]()\n\n\n\nschemaComposer.Query.addFields({\n    ..._switch_schema__WEBPACK_IMPORTED_MODULE_1__[\"SwitchQuery\"]\n})\n\nschemaComposer.Mutation.addFields({\n    ..._switch_schema__WEBPACK_IMPORTED_MODULE_1__[\"SwitchMutation\"]\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schemaComposer.buildSchema());\n\n//# sourceURL=webpack:///./schema/index.js?");

/***/ }),

/***/ "./schema/switch.schema.js":
/*!*********************************!*\
  !*** ./schema/switch.schema.js ***!
  \*********************************/
/*! exports provided: SwitchQuery, SwitchMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SwitchQuery\", function() { return SwitchQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SwitchMutation\", function() { return SwitchMutation; });\n/* harmony import */ var _models_switch_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/switch.model */ \"./models/switch.model.js\");\n\n\nconst SwitchQuery = {\n    gameById: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('findById'),\n    gamesByIds: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('findByIds'),\n    gameOne: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('findOne'),\n    gameMany: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('findMany'),\n    gameCount: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('count'),\n    gameConnection: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('connection'),\n    gamePagination: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('pagination'),\n}\n\nconst SwitchMutation = {\n    gameCreateOne: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('createOne'),\n    gameCreateMany: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('createMany'),\n    gameUpdateById: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('updateById'),\n    gameUpdateOne: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('updateOne'),\n    gameUpdateMany: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('updateMany'),\n    gameRemoveById: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('removeById'),\n    gameRemoveOne: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('removeOne'),\n    gameRemoveMany: _models_switch_model__WEBPACK_IMPORTED_MODULE_0__[\"SwitchTC\"].getResolver('removeMany')\n}\n\n\n\n//# sourceURL=webpack:///./schema/switch.schema.js?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "graphql-compose":
/*!**********************************!*\
  !*** external "graphql-compose" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-compose\");\n\n//# sourceURL=webpack:///external_%22graphql-compose%22?");

/***/ }),

/***/ "graphql-compose-mongoose":
/*!*******************************************!*\
  !*** external "graphql-compose-mongoose" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-compose-mongoose\");\n\n//# sourceURL=webpack:///external_%22graphql-compose-mongoose%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });