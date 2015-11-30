'use strict'

// Dependencies:
;
Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.translate = translate;

var _ngAnnotate = require('ng-annotate');

var _ngAnnotate2 = _interopRequireDefault(_ngAnnotate);

var _pluginTypescript = require('plugin-typescript');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function translate(load) {
	return (0, _pluginTypescript.translate)(load).then(function (load) {
		var annotate = (0, _ngAnnotate2.default)(load.source, {
			add: true,
			remove: true
		});
		load.source = annotate.src;
		return load;
	});
}