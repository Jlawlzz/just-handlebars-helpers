(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.H = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
// Note: ES6 export default would export the H class in 'default' key so we have to use that
module.exports = require('./lib/H.js').default;

},{"./lib/H.js":2}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Utils


// Helpers


var _utils = require('./util/utils');

var _html = require('./helpers/html');

var html = _interopRequireWildcard(_html);

var _math = require('./helpers/math');

var math = _interopRequireWildcard(_math);

var _strings = require('./helpers/strings');

var strings = _interopRequireWildcard(_strings);

var _datetime = require('./helpers/datetime');

var datetime = _interopRequireWildcard(_datetime);

var _conditionals = require('./helpers/conditionals');

var conditionals = _interopRequireWildcard(_conditionals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var H = function () {
    function H() {
        _classCallCheck(this, H);
    }

    _createClass(H, null, [{
        key: 'registerHelpers',
        value: function registerHelpers(handlebars) {

            handlebars = handlebars || global.Handlebars;

            if (!(0, _utils.isObject)(handlebars)) {
                // In case, handlebars is not provided and it's not available
                // in the global namespace as well throw the error and halt.
                throw new Error('Handlebars not loaded');
            }

            // Helpers list
            var helpers = [math, html, strings, conditionals, datetime, formatters];

            helpers.forEach(function (helper) {
                // Register all the helper functions to Handlebars
                for (var name in helper) {
                    handlebars.registerHelper(name, helper[name]);
                }
            });
        }
    }]);

    return H;
}();

exports.default = H;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./helpers/conditionals":3,"./helpers/datetime":4,"./helpers/html":5,"./helpers/math":6,"./helpers/strings":7,"./util/utils":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eq = eq;
exports.eqw = eqw;
exports.neq = neq;
exports.neqw = neqw;
exports.lt = lt;
exports.lte = lte;
exports.gt = gt;
exports.gte = gte;
exports.ifx = ifx;
exports.not = not;
exports.empty = empty;
exports.count = count;
exports.and = and;
exports.or = or;
exports.coalesce = coalesce;
exports.includes = includes;

var _utils = require('../util/utils');

/**
 * Determine whether or not two values are equal (===).
 * @example
 *      {{eq '3' 3}}    => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function eq(value1, value2) {
    return value1 === value2;
}

/**
 * Determine whether or not two values are equal (==) i.e weak checking.
 * @example
 *      {{eqw '3' 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function eqw(value1, value2) {
    return value1 == value2;
}

/**
 * Determine whether or not two values are not equal (!==).
 * @example
 *      {{neq 4 3}}    => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function neq(value1, value2) {
    return value1 !== value2;
}

/**
 * Determine whether or not two values are not equal (!=) weak checking.
 * @example
 *      {{neqw '3' 3}}    => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function neqw(value1, value2) {
    return value1 != value2;
}

/**
 * Check for less than condition (a < b).
 * @example
 *      {{lt 2 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function lt(value1, value2) {
    return value1 < value2;
}

/**
 * Check for less than or equals condition (a <= b).
 * @example
 *      {{lte 2 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function lte(value1, value2) {
    return value1 <= value2;
}

/**
 * Check for greater than condition (a > b).
 * @example
 *      {{gt 2 3}}   => false
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function gt(value1, value2) {
    return value1 > value2;
}

/**
 * Check for greater than or equals condition (a >= b).
 * @example
 *      {{gte 3 3}}   => true
 *
 * @param value1
 * @param value2
 * @returns boolean
 */
function gte(value1, value2) {
    return value1 >= value2;
}

/**
 * Helper to imitate the ternary conditional operator ?:
 *
 * @example
 *      {{ifx true 'Foo' 'Bar'}}    => Foo
 *      {{ifx false 'Foo' 'Bar'}}   => Foo
 *
 * @param condition
 * @param value1    Value to return when the condition holds true
 * @param value2    Value to return when the condition is false (Optional)
 * @returns mixed
 */
function ifx(condition, value1, value2) {
    // Check if user has omitted the last parameter
    // if that's the case, it would be the handlebars's options object
    // which it sends always as the last parameter.
    if ((0, _utils.isObject)(value2) && value2.name === 'ifx' && value2.hasOwnProperty('hash')) {
        // This means the user has skipped the last parameter,
        // so we should return an empty string ('') in the else case instead.
        value2 = '';
    }

    return !!condition ? value1 : value2;
}

/**
 * Logical NOT of any expression.
 * @example
 *      {{not true}}    => false
 *      {{not false}}   => true
 *
 * @param expression
 * @returns boolean
 */
function not(expression) {
    return !expression;
}

/**
 * Check if an array is empty.
 * @example
 *      {{empty array}} => true | false
 *
 * @param array
 * @returns boolean
 */
function empty(array) {
    if (!(0, _utils.isArray)(array)) {
        return true;
    }

    return array.length === 0;
}

/**
 * Determine the length of an array.
 * @example
 *      {{count array}} =>  false | array.length
 *
 * @param array
 * @returns boolean | number
 */
function count(array) {
    if (!(0, _utils.isArray)(array)) {
        return false;
    }

    return array.length;
}

/**
 * Returns the boolean AND of two or more parameters passed i.e
 * it is true iff all the parameters are true.
 *
 * @example
 *     var value1 = value2 = true;
 *     {{and value1 value2}}    => true
 *
 *     var value1 = false, value2 = true;
 *     {{and value1 value2}}    => false
 *
 * @param params
 * @returns boolean
 */
function and() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    // Ignore the object appended by handlebars.
    if ((0, _utils.isObject)(params[params.length - 1])) {
        params.pop();
    }

    for (var i = 0; i < params.length; i++) {
        if (!params[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Returns the boolean OR of two or more parameters passed i.e
 * it is true if any of the parameters is true.
 *
 * @example
 *     var value1 = true, value2 = false;
 *     {{or value1 value2}}    => true
 *
 *     var value = value2 = false;
 *     {{or value1 value2}}    => false
 *
 * @param params
 * @returns boolean
 */
function or() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    // Ignore the object appended by handlebars.
    if ((0, _utils.isObject)(params[params.length - 1])) {
        params.pop();
    }

    for (var i = 0; i < params.length; i++) {
        if (params[i]) {
            return true;
        }
    }

    return false;
}

/**
 * Returns the first non-falsy value from the parameter list.
 * Works quite similar to the SQL's COALESCE() function, but unlike this
 * checks for the first non-false parameter.
 *
 * @example
 *     var fullName = 'Foo Bar', nickName = 'foob';
 *     {{coalesce fullName nickName 'Unknown'}}    => 'Foo Bar'
 *
 *     var fullName = '', nickName = 'foob';
 *     {{coalesce fullName nickName 'Unknown'}}    => 'foob'
 *
 * @param params
 * @returns mixed
 */
function coalesce() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    // Ignore the object appended by handlebars.
    if ((0, _utils.isObject)(params[params.length - 1])) {
        params.pop();
    }

    for (var i = 0; i < params.length; i++) {
        if (params[i]) {
            return params[i];
        }
    }

    return params.pop();
}

/**
 * Returns boolean if the array contains the element strictly or non-strictly.
 * @example
 *     var array = [1, 2, 3, 4];
 *     var value1 = 2, value2 = 10, value3 = '3';
 *     {{includes array value1}}        => true
 *     {{includes array value2}}        => false
 *     {{includes array value3}}        => false
 *     {{includes array value3 false}}  => false
 *
 * @param array
 * @param value
 * @returns boolean
 */
function includes(array, value) {
    var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!(0, _utils.isArray)(array) || array.length === 0) {
        return false;
    }

    for (var i = 0; i < array.length; i++) {
        if (strict && array[i] === value || !strict && array[i] == value) {
            return true;
        }
    }

    return false;
}
},{"../util/utils":8}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatDate = formatDate;

var _utils = require('../util/utils');

/**
 * A formatDate helper to format date using moment js.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' date}}
 *
 * @param formatString based on moment.js
 * @param date
 * @return string
 */
function formatDate(formatString, date) {
    var moment = global.moment;

    if (!moment) {
        moment = (window.moment);
    }

    formatString = (0, _utils.isString)(formatString) ? formatString : '';

    return moment(date || new Date()).format(formatString);
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showIf = showIf;
exports.hideIf = hideIf;
exports.selectedIf = selectedIf;
exports.checkedIf = checkedIf;
exports.options = options;
/**
 * A showIf helper for showing any html element.
 * @example
 *      {{showIf true}}     => ''
 *
 * @param expression
 * @returns string
 */
function showIf(expression) {
    return !!expression ? '' : 'hidden';
}

/**
 * A hideIf helper for hiding any html element.
 * @example
 *      {{hideIf true}}     => 'hidden'
 *
 * @param expression
 * @returns string
 */
function hideIf(expression) {
    return !!expression ? 'hidden' : '';
}

/**
 * A selectedIf helper for dropdown and radio boxes.
 * @example
 *      {{selectedIf true}} =>  'selected'
 *
 * @param expression
 * @returns string
 */
function selectedIf(expression) {
    return !!expression ? 'selected' : '';
}

/**
 * A checkedIf helper for checkboxes.
 * @example
 *      {{checkedIf true}}  => 'checked'
 *
 * @param expression
 * @returns string
 */
function checkedIf(expression) {
    return !!expression ? 'checked' : '';
}

/**
 * An options helper for generating <option> list for <select> dropdowns.
 *
 * @example
 * A simple example:
 *
 *      let data = [
 *          {
 *              id: 1,
 *              description: 'Foo'
 *          },
 *          {
 *              id: 2,
 *              description: 'Bar'
 *          },
 *          {
 *              id: 3,
 *              description: 'Foo Bar'
 *          }
 *      ];
 *
 *      {{{options data selected="2"}}}
 *
 * will generate html like this:
 *
 *      <option value="1">Foo</option>
 *      <option value="2" selected>Bar</option>
 *      <option value="3">Foo Bar</option>
 *
 * @example
 * You can also override the default key names for 'id' & 'description'
 * using the 'id' & 'text' options in the helper.
 *
 *      let data = [
 *          {
 *              value: 1,
 *              text: 'New York'
 *          },
 *          {
 *              value: 2,
 *              text: 'London'
 *          }
 *      ];
 *
 *      {{{options data selected="1" id="value" text="text"}}}
 *
 * will generate html like this:
 *
 *      <option value="1" selected>New York</option>
 *      <option value="2">London</option>
 *
 */
function options(data, opts) {
    // The id & text for the <option>
    var id = opts.hash.id || 'id';
    var text = opts.hash.text || 'description';

    // The selection "id" of the <option>
    var selectedId = opts.hash.selected || null;

    return data.map(function (item) {
        var value = item[id] || '';
        var innerText = item[text] || '';
        var selected = value == selectedId ? ' selected' : '';

        return '<option value="' + value + '"' + selected + '>' + innerText + '</option>';
    }).join('\n');
}
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
exports.difference = difference;
exports.ceil = ceil;
exports.floor = floor;
/**
 * A sum helper calculating the sum of two numbers.
 * @example
 *      {{sum 1 2}}     => 3
 *
 * @param value1
 * @param value2
 * @returns number
 */
function sum(value1, value2) {
  return Number(value1) + Number(value2);
}

/**
 * A difference helper calculating the difference of two numbers.
 * @example
 *      {{difference 5 2}}  => 3
 *
 * @param value1
 * @param value2
 * @returns number
 */
function difference(value1, value2) {
  return Number(value1) - Number(value2);
}

/**
 * A ceil helper to find the ceil value of the number.
 * @example
 *      {{ceil 5.6}}    => 6
 *
 * @param value
 * @returns number
 */
function ceil(value) {
  return Math.ceil(Number(value));
}

/**
 * A floor helper to find the floor value of the number.
 * @example
 *      {{floor 5.6}} => 5
 *
 * @param value
 * @returns number
 */
function floor(value) {
  return Math.floor(Number(value));
}
},{}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.excerpt = excerpt;
exports.sanitize = sanitize;
exports.newLineToBr = newLineToBr;
exports.capitalizeEach = capitalizeEach;
exports.capitalizeFirst = capitalizeFirst;
exports.sprintf = sprintf;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.first = first;
exports.last = last;
exports.concat = concat;
exports.join = join;

var _utils = require('../util/utils');

/**
 * Extract a few characters from a string. Default number of characters is 50.
 * @example
 *      {{excerpt 'Just Wow' 4}}    => 'Just'
 *
 * @param string
 * @param length
 * @returns string
 */
function excerpt(string, length) {
    length = parseInt(length) || 50;

    if (typeof string !== 'string' || typeof length !== 'number') {
        return string;
    }

    if (string.length < length) {
        return string;
    }

    return string.slice(0, length) + '...';
}

/**
 * Convert a string to url friendly dash-case string removing special characters.
 * @example
 *      {{sanitize 'JuSt #Wow'}}    => 'just-wow'
 *
 * @param string
 * @returns string
 */
function sanitize(string) {
    string = string.replace(/[^\w\s]/gi, '').trim();

    return string.replace(/\s+/, '-').toLowerCase();
}

/**
 * Replace \n with <br> tags.
 * @example
 *     {{newLineToBr 'newLineToBr helper \n is very \n useful.'}}    => newLineToBr helper <br> is very <br> useful.
 *
 * @param  {string}
 * @return {string}
 */
function newLineToBr(string) {
    return string.replace(/\r?\n|\r/g, '<br>');
}

/**
 * Capitalize each letter of a string.
 * @example
 *      {{capitalizeEach 'just wow'}}   => 'Just Wow'
 *
 * @param string
 * @returns string
 */
function capitalizeEach(string) {
    if (typeof string === 'string') {
        return string.toLowerCase().replace(/\w\S*/g, function (match) {
            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }

    return string;
}

/**
 * Capitalize the first letter of a string.
 * @example
 *      {{capitalizeFirst 'just wow'}}   => 'Just wow'
 *
 * @param string
 * @returns string
 */
function capitalizeFirst(string) {
    if (typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return string;
}

/**
 * A sprintf helper to be used in the handlebars templates that supports arbitrary parameters.
 *
 * NOTE: This helper relies on sprintf() function provided by https://github.com/alexei/sprintf.js
 * So, make sure you have the sprintf-js package available either as a node module
 * or have sprintf/vsprintf functions available in the global scope from that package.
 *
 * Syntax:
 *      {{sprintf format arg1 arg2 arg3....}}
 *      {{sprintf format object}}
 *      {{sprintf format key1=value1 key2=value2...}}
 *
 *  @example
 *      {{sprintf '%s %s!' 'Hello' 'Kabir' }}
 *      {{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
 *      {{sprintf '%(greeting)s %(name)s! How are you?' obj }}
 *      {{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
 *
 * Check this https://github.com/alexei/sprintf.js for more information
 *
 * @param format
 * @param ...args
 * @returns string
 */
function sprintf(format) {

    // Check if the vsprintf function is available globally
    // if it's not available then try to require() it
    var _vsprintf = global.vsprintf;

    if (!(0, _utils.isFunction)(_vsprintf)) {
        _vsprintf = ({sprintf: window.sprintf, vsprintf: window.vsprintf}).vsprintf;
    }

    // Normalize all the parameters before passing it to the
    // sprintf/vsprintf function
    var params = [];

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    args.forEach(function (arg) {
        if ((0, _utils.isObject)(arg) && (0, _utils.isObject)(arg.hash)) {
            arg = arg.hash;
        }

        params.push(arg);
    });

    return params.length > 0 ? _vsprintf(format, params) : format;
}

/**
 * Changes the string to lowercase.
 * @example
 *    {{lowercase 'JUST WOW!!!'}}   => 'just wow!!!'
 *
 * @param  string param
 * @return string
 */
function lowercase(param) {
    return (0, _utils.isString)(param) ? param.toLowerCase() : param;
}

/**
 * Changes the string to uppercase.
 * @example
 *    {{uppercase 'just wow!!!'}}   => 'JUST WOW!!!'
 *
 * @param  string param
 * @return string
 */
function uppercase(param) {
    return (0, _utils.isString)(param) ? param.toUpperCase() : param;
}

/**
 * Get the first element of a collection/array.
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{first someArray}}   => 'David'
 *
 * @param  array collection
 * @return string
 */
function first(collection) {
    if (!(0, _utils.isArray)(collection) || collection.length === 0) {
        return '';
    }

    return collection[0];
}

/**
 * Get the last element of a collection/array.
 * @example
 *    var someArray = ['David', 'Miller', 'Jones'];
 *    {{last someArray}}   => 'Jones'
 *
 * @param  array collection
 * @return string
 */
function last(collection) {
    if (!(0, _utils.isArray)(collection) || collection.length === 0) {
        return '';
    }

    return collection[collection.length - 1];
}

/**
 * Concat two or more strings.
 * @example
 *    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
 *
 * @param  mixed ...params
 * @return string
 */
function concat() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    // Ignore the object appended by handlebars.
    if ((0, _utils.isObject)(params[params.length - 1])) {
        params.pop();
    }

    return params.join('');
}

/**
 * Join the elements of an array using a delimeter.
 *
 * @example
 *    var someArray = ['Hands', 'legs', 'feet'];
 *    {{join someArray ' & '}}   => 'Hands & legs & feet'
 *
 * @param  array params
 * @param  string delimeter
 * @return string
 */
function join(params, delimeter) {
    if (!delimeter || (0, _utils.isObject)(delimeter)) {
        delimeter = '';
    }

    if (!(0, _utils.isArray)(params)) {
        return false;
    }

    return params.join(delimeter);
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../util/utils":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isNumeric = isNumeric;
/**
 * Check if param is a function.
 *
 * @param thing
 * @returns boolean
 */
function isFunction(thing) {
  return typeof thing === 'function';
}

/**
 * Check if param is a string.
 *
 * @param thing
 * @returns boolean
 */
function isString(thing) {
  return typeof thing === 'string';
}

/**
 * Check if param is undefined.
 *
 * @param thing
 * @returns boolean
 */
function isUndefined(thing) {
  return typeof thing === 'undefined';
}

/**
 * Check if param is not undefined.
 *
 * @param thing
 * @returns boolean
 */
function isDefined(thing) {
  return !isUndefined(thing);
}

/**
 * Check if param is an object.
 *
 * @param thing
 * @returns boolean
 */
function isObject(thing) {
  return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object';
}

/**
 * Check if param is an array.
 *
 * @param thing
 * @returns boolean
 */
function isArray(thing) {
  return Object.prototype.toString.call(thing) === '[object Array]';
}

/**
 * Check if the value is numeric.
 *
 * @param value
 * @returns {boolean}
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9ILmpzIiwibGliL2hlbHBlcnMvY29uZGl0aW9uYWxzLmpzIiwibGliL2hlbHBlcnMvZGF0ZXRpbWUuanMiLCJsaWIvaGVscGVycy9odG1sLmpzIiwibGliL2hlbHBlcnMvbWF0aC5qcyIsImxpYi9oZWxwZXJzL3N0cmluZ3MuanMiLCJsaWIvdXRpbC91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIvLyBOb3RlOiBFUzYgZXhwb3J0IGRlZmF1bHQgd291bGQgZXhwb3J0IHRoZSBIIGNsYXNzIGluICdkZWZhdWx0JyBrZXkgc28gd2UgaGF2ZSB0byB1c2UgdGhhdFxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9ILmpzJykuZGVmYXVsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBVdGlsc1xuXG5cbi8vIEhlbHBlcnNcblxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlsL3V0aWxzJyk7XG5cbnZhciBfaHRtbCA9IHJlcXVpcmUoJy4vaGVscGVycy9odG1sJyk7XG5cbnZhciBodG1sID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2h0bWwpO1xuXG52YXIgX21hdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvbWF0aCcpO1xuXG52YXIgbWF0aCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9tYXRoKTtcblxudmFyIF9zdHJpbmdzID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0cmluZ3MnKTtcblxudmFyIHN0cmluZ3MgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc3RyaW5ncyk7XG5cbnZhciBfZGF0ZXRpbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvZGF0ZXRpbWUnKTtcblxudmFyIGRhdGV0aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2RhdGV0aW1lKTtcblxudmFyIF9jb25kaXRpb25hbHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvY29uZGl0aW9uYWxzJyk7XG5cbnZhciBjb25kaXRpb25hbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uZGl0aW9uYWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEggPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhILCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlckhlbHBlcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXJzKGhhbmRsZWJhcnMpIHtcblxuICAgICAgICAgICAgaGFuZGxlYmFycyA9IGhhbmRsZWJhcnMgfHwgZ2xvYmFsLkhhbmRsZWJhcnM7XG5cbiAgICAgICAgICAgIGlmICghKDAsIF91dGlscy5pc09iamVjdCkoaGFuZGxlYmFycykpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlLCBoYW5kbGViYXJzIGlzIG5vdCBwcm92aWRlZCBhbmQgaXQncyBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIGdsb2JhbCBuYW1lc3BhY2UgYXMgd2VsbCB0aHJvdyB0aGUgZXJyb3IgYW5kIGhhbHQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGViYXJzIG5vdCBsb2FkZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGVscGVycyBsaXN0XG4gICAgICAgICAgICB2YXIgaGVscGVycyA9IFttYXRoLCBodG1sLCBzdHJpbmdzLCBjb25kaXRpb25hbHMsIGRhdGV0aW1lLCBmb3JtYXR0ZXJzXTtcblxuICAgICAgICAgICAgaGVscGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBhbGwgdGhlIGhlbHBlciBmdW5jdGlvbnMgdG8gSGFuZGxlYmFyc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVscGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgaGVscGVyW25hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBIO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lcSA9IGVxO1xuZXhwb3J0cy5lcXcgPSBlcXc7XG5leHBvcnRzLm5lcSA9IG5lcTtcbmV4cG9ydHMubmVxdyA9IG5lcXc7XG5leHBvcnRzLmx0ID0gbHQ7XG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmV4cG9ydHMuZ3QgPSBndDtcbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZXhwb3J0cy5pZnggPSBpZng7XG5leHBvcnRzLm5vdCA9IG5vdDtcbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmV4cG9ydHMuY291bnQgPSBjb3VudDtcbmV4cG9ydHMuYW5kID0gYW5kO1xuZXhwb3J0cy5vciA9IG9yO1xuZXhwb3J0cy5jb2FsZXNjZSA9IGNvYWxlc2NlO1xuZXhwb3J0cy5pbmNsdWRlcyA9IGluY2x1ZGVzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbC91dGlscycpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0d28gdmFsdWVzIGFyZSBlcXVhbCAoPT09KS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7ZXEgJzMnIDN9fSAgICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIGVxdWFsICg9PSkgaS5lIHdlYWsgY2hlY2tpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VxdyAnMycgM319ICAgPT4gdHJ1ZVxuICpcbiAqIEBwYXJhbSB2YWx1ZTFcbiAqIEBwYXJhbSB2YWx1ZTJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSA9PSB2YWx1ZTI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHR3byB2YWx1ZXMgYXJlIG5vdCBlcXVhbCAoIT09KS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bmVxIDQgM319ICAgID0+IHRydWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUxXG4gKiBAcGFyYW0gdmFsdWUyXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIG5lcSh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgIT09IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgdHdvIHZhbHVlcyBhcmUgbm90IGVxdWFsICghPSkgd2VhayBjaGVja2luZy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bmVxdyAnMycgM319ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBuZXF3KHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgcmV0dXJuIHZhbHVlMSAhPSB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBjb25kaXRpb24gKGEgPCBiKS5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7bHQgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBsdCh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgPCB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGxlc3MgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhIDw9IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tsdGUgMiAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBsdGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxIDw9IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgZ3JlYXRlciB0aGFuIGNvbmRpdGlvbiAoYSA+IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndCAyIDN9fSAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBndCh2YWx1ZTEsIHZhbHVlMikge1xuICAgIHJldHVybiB2YWx1ZTEgPiB2YWx1ZTI7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIGdyZWF0ZXIgdGhhbiBvciBlcXVhbHMgY29uZGl0aW9uIChhID49IGIpLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tndGUgMyAzfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBndGUodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxID49IHZhbHVlMjtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gaW1pdGF0ZSB0aGUgdGVybmFyeSBjb25kaXRpb25hbCBvcGVyYXRvciA/OlxuICpcbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7aWZ4IHRydWUgJ0ZvbycgJ0Jhcid9fSAgICA9PiBGb29cbiAqICAgICAge3tpZnggZmFsc2UgJ0ZvbycgJ0Jhcid9fSAgID0+IEZvb1xuICpcbiAqIEBwYXJhbSBjb25kaXRpb25cbiAqIEBwYXJhbSB2YWx1ZTEgICAgVmFsdWUgdG8gcmV0dXJuIHdoZW4gdGhlIGNvbmRpdGlvbiBob2xkcyB0cnVlXG4gKiBAcGFyYW0gdmFsdWUyICAgIFZhbHVlIHRvIHJldHVybiB3aGVuIHRoZSBjb25kaXRpb24gaXMgZmFsc2UgKE9wdGlvbmFsKVxuICogQHJldHVybnMgbWl4ZWRcbiAqL1xuZnVuY3Rpb24gaWZ4KGNvbmRpdGlvbiwgdmFsdWUxLCB2YWx1ZTIpIHtcbiAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBvbWl0dGVkIHRoZSBsYXN0IHBhcmFtZXRlclxuICAgIC8vIGlmIHRoYXQncyB0aGUgY2FzZSwgaXQgd291bGQgYmUgdGhlIGhhbmRsZWJhcnMncyBvcHRpb25zIG9iamVjdFxuICAgIC8vIHdoaWNoIGl0IHNlbmRzIGFsd2F5cyBhcyB0aGUgbGFzdCBwYXJhbWV0ZXIuXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHZhbHVlMikgJiYgdmFsdWUyLm5hbWUgPT09ICdpZngnICYmIHZhbHVlMi5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpKSB7XG4gICAgICAgIC8vIFRoaXMgbWVhbnMgdGhlIHVzZXIgaGFzIHNraXBwZWQgdGhlIGxhc3QgcGFyYW1ldGVyLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyAoJycpIGluIHRoZSBlbHNlIGNhc2UgaW5zdGVhZC5cbiAgICAgICAgdmFsdWUyID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhY29uZGl0aW9uID8gdmFsdWUxIDogdmFsdWUyO1xufVxuXG4vKipcbiAqIExvZ2ljYWwgTk9UIG9mIGFueSBleHByZXNzaW9uLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tub3QgdHJ1ZX19ICAgID0+IGZhbHNlXG4gKiAgICAgIHt7bm90IGZhbHNlfX0gICA9PiB0cnVlXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gbm90KGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gIWV4cHJlc3Npb247XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXJyYXkgaXMgZW1wdHkuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2VtcHR5IGFycmF5fX0gPT4gdHJ1ZSB8IGZhbHNlXG4gKlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGFycmF5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGFuIGFycmF5LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tjb3VudCBhcnJheX19ID0+ICBmYWxzZSB8IGFycmF5Lmxlbmd0aFxuICpcbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybnMgYm9vbGVhbiB8IG51bWJlclxuICovXG5mdW5jdGlvbiBjb3VudChhcnJheSkge1xuICAgIGlmICghKDAsIF91dGlscy5pc0FycmF5KShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm9vbGVhbiBBTkQgb2YgdHdvIG9yIG1vcmUgcGFyYW1ldGVycyBwYXNzZWQgaS5lXG4gKiBpdCBpcyB0cnVlIGlmZiBhbGwgdGhlIHBhcmFtZXRlcnMgYXJlIHRydWUuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgdmFsdWUxID0gdmFsdWUyID0gdHJ1ZTtcbiAqICAgICB7e2FuZCB2YWx1ZTEgdmFsdWUyfX0gICAgPT4gdHJ1ZVxuICpcbiAqICAgICB2YXIgdmFsdWUxID0gZmFsc2UsIHZhbHVlMiA9IHRydWU7XG4gKiAgICAge3thbmQgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBhbmQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghcGFyYW1zW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIE9SIG9mIHR3byBvciBtb3JlIHBhcmFtZXRlcnMgcGFzc2VkIGkuZVxuICogaXQgaXMgdHJ1ZSBpZiBhbnkgb2YgdGhlIHBhcmFtZXRlcnMgaXMgdHJ1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciB2YWx1ZTEgPSB0cnVlLCB2YWx1ZTIgPSBmYWxzZTtcbiAqICAgICB7e29yIHZhbHVlMSB2YWx1ZTJ9fSAgICA9PiB0cnVlXG4gKlxuICogICAgIHZhciB2YWx1ZSA9IHZhbHVlMiA9IGZhbHNlO1xuICogICAgIHt7b3IgdmFsdWUxIHZhbHVlMn19ICAgID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIHBhcmFtc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSB0aGUgb2JqZWN0IGFwcGVuZGVkIGJ5IGhhbmRsZWJhcnMuXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNPYmplY3QpKHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHBhcmFtcy5wb3AoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBub24tZmFsc3kgdmFsdWUgZnJvbSB0aGUgcGFyYW1ldGVyIGxpc3QuXG4gKiBXb3JrcyBxdWl0ZSBzaW1pbGFyIHRvIHRoZSBTUUwncyBDT0FMRVNDRSgpIGZ1bmN0aW9uLCBidXQgdW5saWtlIHRoaXNcbiAqIGNoZWNrcyBmb3IgdGhlIGZpcnN0IG5vbi1mYWxzZSBwYXJhbWV0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgZnVsbE5hbWUgPSAnRm9vIEJhcicsIG5pY2tOYW1lID0gJ2Zvb2InO1xuICogICAgIHt7Y29hbGVzY2UgZnVsbE5hbWUgbmlja05hbWUgJ1Vua25vd24nfX0gICAgPT4gJ0ZvbyBCYXInXG4gKlxuICogICAgIHZhciBmdWxsTmFtZSA9ICcnLCBuaWNrTmFtZSA9ICdmb29iJztcbiAqICAgICB7e2NvYWxlc2NlIGZ1bGxOYW1lIG5pY2tOYW1lICdVbmtub3duJ319ICAgID0+ICdmb29iJ1xuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIG1peGVkXG4gKi9cbmZ1bmN0aW9uIGNvYWxlc2NlKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIHRoZSBvYmplY3QgYXBwZW5kZWQgYnkgaGFuZGxlYmFycy5cbiAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgcGFyYW1zLnBvcCgpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJhbXNbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zLnBvcCgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYm9vbGVhbiBpZiB0aGUgYXJyYXkgY29udGFpbnMgdGhlIGVsZW1lbnQgc3RyaWN0bHkgb3Igbm9uLXN0cmljdGx5LlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgYXJyYXkgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgdmFyIHZhbHVlMSA9IDIsIHZhbHVlMiA9IDEwLCB2YWx1ZTMgPSAnMyc7XG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTF9fSAgICAgICAgPT4gdHJ1ZVxuICogICAgIHt7aW5jbHVkZXMgYXJyYXkgdmFsdWUyfX0gICAgICAgID0+IGZhbHNlXG4gKiAgICAge3tpbmNsdWRlcyBhcnJheSB2YWx1ZTN9fSAgICAgICAgPT4gZmFsc2VcbiAqICAgICB7e2luY2x1ZGVzIGFycmF5IHZhbHVlMyBmYWxzZX19ICA9PiBmYWxzZVxuICpcbiAqIEBwYXJhbSBhcnJheVxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICAgIHZhciBzdHJpY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RyaWN0ICYmIGFycmF5W2ldID09PSB2YWx1ZSB8fCAhc3RyaWN0ICYmIGFycmF5W2ldID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogQSBmb3JtYXREYXRlIGhlbHBlciB0byBmb3JtYXQgZGF0ZSB1c2luZyBtb21lbnQganMuXG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmb3JtYXREYXRlICdNTS9ERC9ZWVlZJyBkYXRlfX1cbiAqXG4gKiBAcGFyYW0gZm9ybWF0U3RyaW5nIGJhc2VkIG9uIG1vbWVudC5qc1xuICogQHBhcmFtIGRhdGVcbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZm9ybWF0U3RyaW5nLCBkYXRlKSB7XG4gICAgdmFyIG1vbWVudCA9IGdsb2JhbC5tb21lbnQ7XG5cbiAgICBpZiAoIW1vbWVudCkge1xuICAgICAgICBtb21lbnQgPSAod2luZG93Lm1vbWVudCk7XG4gICAgfVxuXG4gICAgZm9ybWF0U3RyaW5nID0gKDAsIF91dGlscy5pc1N0cmluZykoZm9ybWF0U3RyaW5nKSA/IGZvcm1hdFN0cmluZyA6ICcnO1xuXG4gICAgcmV0dXJuIG1vbWVudChkYXRlIHx8IG5ldyBEYXRlKCkpLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zaG93SWYgPSBzaG93SWY7XG5leHBvcnRzLmhpZGVJZiA9IGhpZGVJZjtcbmV4cG9ydHMuc2VsZWN0ZWRJZiA9IHNlbGVjdGVkSWY7XG5leHBvcnRzLmNoZWNrZWRJZiA9IGNoZWNrZWRJZjtcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG4vKipcbiAqIEEgc2hvd0lmIGhlbHBlciBmb3Igc2hvd2luZyBhbnkgaHRtbCBlbGVtZW50LlxuICogQGV4YW1wbGVcbiAqICAgICAge3tzaG93SWYgdHJ1ZX19ICAgICA9PiAnJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gc2hvd0lmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJycgOiAnaGlkZGVuJztcbn1cblxuLyoqXG4gKiBBIGhpZGVJZiBoZWxwZXIgZm9yIGhpZGluZyBhbnkgaHRtbCBlbGVtZW50LlxuICogQGV4YW1wbGVcbiAqICAgICAge3toaWRlSWYgdHJ1ZX19ICAgICA9PiAnaGlkZGVuJ1xuICpcbiAqIEBwYXJhbSBleHByZXNzaW9uXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gaGlkZUlmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ2hpZGRlbicgOiAnJztcbn1cblxuLyoqXG4gKiBBIHNlbGVjdGVkSWYgaGVscGVyIGZvciBkcm9wZG93biBhbmQgcmFkaW8gYm94ZXMuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e3NlbGVjdGVkSWYgdHJ1ZX19ID0+ICAnc2VsZWN0ZWQnXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzZWxlY3RlZElmKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gISFleHByZXNzaW9uID8gJ3NlbGVjdGVkJyA6ICcnO1xufVxuXG4vKipcbiAqIEEgY2hlY2tlZElmIGhlbHBlciBmb3IgY2hlY2tib3hlcy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2hlY2tlZElmIHRydWV9fSAgPT4gJ2NoZWNrZWQnXG4gKlxuICogQHBhcmFtIGV4cHJlc3Npb25cbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjaGVja2VkSWYoZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24gPyAnY2hlY2tlZCcgOiAnJztcbn1cblxuLyoqXG4gKiBBbiBvcHRpb25zIGhlbHBlciBmb3IgZ2VuZXJhdGluZyA8b3B0aW9uPiBsaXN0IGZvciA8c2VsZWN0PiBkcm9wZG93bnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIEEgc2ltcGxlIGV4YW1wbGU6XG4gKlxuICogICAgICBsZXQgZGF0YSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICBpZDogMSxcbiAqICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvbydcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgaWQ6IDIsXG4gKiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCYXInXG4gKiAgICAgICAgICB9LFxuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIGlkOiAzLFxuICogICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRm9vIEJhcidcbiAqICAgICAgICAgIH1cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjJcIn19fVxuICpcbiAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gKlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkZvbzwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHNlbGVjdGVkPkJhcjwvb3B0aW9uPlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkZvbyBCYXI8L29wdGlvbj5cbiAqXG4gKiBAZXhhbXBsZVxuICogWW91IGNhbiBhbHNvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGtleSBuYW1lcyBmb3IgJ2lkJyAmICdkZXNjcmlwdGlvbidcbiAqIHVzaW5nIHRoZSAnaWQnICYgJ3RleHQnIG9wdGlvbnMgaW4gdGhlIGhlbHBlci5cbiAqXG4gKiAgICAgIGxldCBkYXRhID0gW1xuICogICAgICAgICAge1xuICogICAgICAgICAgICAgIHZhbHVlOiAxLFxuICogICAgICAgICAgICAgIHRleHQ6ICdOZXcgWW9yaydcbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdmFsdWU6IDIsXG4gKiAgICAgICAgICAgICAgdGV4dDogJ0xvbmRvbidcbiAqICAgICAgICAgIH1cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIHt7e29wdGlvbnMgZGF0YSBzZWxlY3RlZD1cIjFcIiBpZD1cInZhbHVlXCIgdGV4dD1cInRleHRcIn19fVxuICpcbiAqIHdpbGwgZ2VuZXJhdGUgaHRtbCBsaWtlIHRoaXM6XG4gKlxuICogICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHNlbGVjdGVkPk5ldyBZb3JrPC9vcHRpb24+XG4gKiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+TG9uZG9uPC9vcHRpb24+XG4gKlxuICovXG5mdW5jdGlvbiBvcHRpb25zKGRhdGEsIG9wdHMpIHtcbiAgICAvLyBUaGUgaWQgJiB0ZXh0IGZvciB0aGUgPG9wdGlvbj5cbiAgICB2YXIgaWQgPSBvcHRzLmhhc2guaWQgfHwgJ2lkJztcbiAgICB2YXIgdGV4dCA9IG9wdHMuaGFzaC50ZXh0IHx8ICdkZXNjcmlwdGlvbic7XG5cbiAgICAvLyBUaGUgc2VsZWN0aW9uIFwiaWRcIiBvZiB0aGUgPG9wdGlvbj5cbiAgICB2YXIgc2VsZWN0ZWRJZCA9IG9wdHMuaGFzaC5zZWxlY3RlZCB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1baWRdIHx8ICcnO1xuICAgICAgICB2YXIgaW5uZXJUZXh0ID0gaXRlbVt0ZXh0XSB8fCAnJztcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdmFsdWUgPT0gc2VsZWN0ZWRJZCA/ICcgc2VsZWN0ZWQnIDogJyc7XG5cbiAgICAgICAgcmV0dXJuICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlICsgJ1wiJyArIHNlbGVjdGVkICsgJz4nICsgaW5uZXJUZXh0ICsgJzwvb3B0aW9uPic7XG4gICAgfSkuam9pbignXFxuJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnN1bSA9IHN1bTtcbmV4cG9ydHMuZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5leHBvcnRzLmNlaWwgPSBjZWlsO1xuZXhwb3J0cy5mbG9vciA9IGZsb29yO1xuLyoqXG4gKiBBIHN1bSBoZWxwZXIgY2FsY3VsYXRpbmcgdGhlIHN1bSBvZiB0d28gbnVtYmVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c3VtIDEgMn19ICAgICA9PiAzXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHN1bSh2YWx1ZTEsIHZhbHVlMikge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlMSkgKyBOdW1iZXIodmFsdWUyKTtcbn1cblxuLyoqXG4gKiBBIGRpZmZlcmVuY2UgaGVscGVyIGNhbGN1bGF0aW5nIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBudW1iZXJzLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tkaWZmZXJlbmNlIDUgMn19ICA9PiAzXG4gKlxuICogQHBhcmFtIHZhbHVlMVxuICogQHBhcmFtIHZhbHVlMlxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2UodmFsdWUxLCB2YWx1ZTIpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZTEpIC0gTnVtYmVyKHZhbHVlMik7XG59XG5cbi8qKlxuICogQSBjZWlsIGhlbHBlciB0byBmaW5kIHRoZSBjZWlsIHZhbHVlIG9mIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NlaWwgNS42fX0gICAgPT4gNlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIGNlaWwodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGguY2VpbChOdW1iZXIodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBBIGZsb29yIGhlbHBlciB0byBmaW5kIHRoZSBmbG9vciB2YWx1ZSBvZiB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqICAgICAge3tmbG9vciA1LjZ9fSA9PiA1XG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyBudW1iZXJcbiAqL1xuZnVuY3Rpb24gZmxvb3IodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTnVtYmVyKHZhbHVlKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4Y2VycHQgPSBleGNlcnB0O1xuZXhwb3J0cy5zYW5pdGl6ZSA9IHNhbml0aXplO1xuZXhwb3J0cy5uZXdMaW5lVG9CciA9IG5ld0xpbmVUb0JyO1xuZXhwb3J0cy5jYXBpdGFsaXplRWFjaCA9IGNhcGl0YWxpemVFYWNoO1xuZXhwb3J0cy5jYXBpdGFsaXplRmlyc3QgPSBjYXBpdGFsaXplRmlyc3Q7XG5leHBvcnRzLnNwcmludGYgPSBzcHJpbnRmO1xuZXhwb3J0cy5sb3dlcmNhc2UgPSBsb3dlcmNhc2U7XG5leHBvcnRzLnVwcGVyY2FzZSA9IHVwcGVyY2FzZTtcbmV4cG9ydHMuZmlyc3QgPSBmaXJzdDtcbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuam9pbiA9IGpvaW47XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlsL3V0aWxzJyk7XG5cbi8qKlxuICogRXh0cmFjdCBhIGZldyBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuIERlZmF1bHQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgNTAuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2V4Y2VycHQgJ0p1c3QgV293JyA0fX0gICAgPT4gJ0p1c3QnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHBhcmFtIGxlbmd0aFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGV4Y2VycHQoc3RyaW5nLCBsZW5ndGgpIHtcbiAgICBsZW5ndGggPSBwYXJzZUludChsZW5ndGgpIHx8IDUwO1xuXG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGxlbmd0aCkgKyAnLi4uJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIHVybCBmcmllbmRseSBkYXNoLWNhc2Ugc3RyaW5nIHJlbW92aW5nIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7c2FuaXRpemUgJ0p1U3QgI1dvdyd9fSAgICA9PiAnanVzdC13b3cnXG4gKlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICcnKS50cmltKCk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1xccysvLCAnLScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBcXG4gd2l0aCA8YnI+IHRhZ3MuXG4gKiBAZXhhbXBsZVxuICogICAgIHt7bmV3TGluZVRvQnIgJ25ld0xpbmVUb0JyIGhlbHBlciBcXG4gaXMgdmVyeSBcXG4gdXNlZnVsLid9fSAgICA9PiBuZXdMaW5lVG9CciBoZWxwZXIgPGJyPiBpcyB2ZXJ5IDxicj4gdXNlZnVsLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbmV3TGluZVRvQnIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHI/XFxufFxcci9nLCAnPGJyPicpO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgZWFjaCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICogICAgICB7e2NhcGl0YWxpemVFYWNoICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IFdvdydcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUVhY2goc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbWF0Y2guc3Vic3RyKDEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKiAgICAgIHt7Y2FwaXRhbGl6ZUZpcnN0ICdqdXN0IHdvdyd9fSAgID0+ICdKdXN0IHdvdydcbiAqXG4gKiBAcGFyYW0gc3RyaW5nXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBzcHJpbnRmIGhlbHBlciB0byBiZSB1c2VkIGluIHRoZSBoYW5kbGViYXJzIHRlbXBsYXRlcyB0aGF0IHN1cHBvcnRzIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICpcbiAqIE5PVEU6IFRoaXMgaGVscGVyIHJlbGllcyBvbiBzcHJpbnRmKCkgZnVuY3Rpb24gcHJvdmlkZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzXG4gKiBTbywgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBzcHJpbnRmLWpzIHBhY2thZ2UgYXZhaWxhYmxlIGVpdGhlciBhcyBhIG5vZGUgbW9kdWxlXG4gKiBvciBoYXZlIHNwcmludGYvdnNwcmludGYgZnVuY3Rpb25zIGF2YWlsYWJsZSBpbiB0aGUgZ2xvYmFsIHNjb3BlIGZyb20gdGhhdCBwYWNrYWdlLlxuICpcbiAqIFN5bnRheDpcbiAqICAgICAge3tzcHJpbnRmIGZvcm1hdCBhcmcxIGFyZzIgYXJnMy4uLi59fVxuICogICAgICB7e3NwcmludGYgZm9ybWF0IG9iamVjdH19XG4gKiAgICAgIHt7c3ByaW50ZiBmb3JtYXQga2V5MT12YWx1ZTEga2V5Mj12YWx1ZTIuLi59fVxuICpcbiAqICBAZXhhbXBsZVxuICogICAgICB7e3NwcmludGYgJyVzICVzIScgJ0hlbGxvJyAnS2FiaXInIH19XG4gKiAgICAgIHt7c3ByaW50ZiAnJXMgJXMgJWQgJXMgJWQnICdGb28nICdCYXInIDU1ICdCYXonICcyMCd9fVxuICogICAgICB7e3NwcmludGYgJyUoZ3JlZXRpbmcpcyAlKG5hbWUpcyEgSG93IGFyZSB5b3U/JyBvYmogfX1cbiAqICAgICAge3tzcHJpbnRmICclKGdyZWV0aW5nKXMgJShuYW1lKXMhICcgZ3JlZXRpbmc9J0hlbGxvJyBuYW1lPSdLYWJpcid9fVxuICpcbiAqIENoZWNrIHRoaXMgaHR0cHM6Ly9naXRodWIuY29tL2FsZXhlaS9zcHJpbnRmLmpzIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gKlxuICogQHBhcmFtIGZvcm1hdFxuICogQHBhcmFtIC4uLmFyZ3NcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5mdW5jdGlvbiBzcHJpbnRmKGZvcm1hdCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHZzcHJpbnRmIGZ1bmN0aW9uIGlzIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSB0aGVuIHRyeSB0byByZXF1aXJlKCkgaXRcbiAgICB2YXIgX3ZzcHJpbnRmID0gZ2xvYmFsLnZzcHJpbnRmO1xuXG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzRnVuY3Rpb24pKF92c3ByaW50ZikpIHtcbiAgICAgICAgX3ZzcHJpbnRmID0gKHtzcHJpbnRmOiB3aW5kb3cuc3ByaW50ZiwgdnNwcmludGY6IHdpbmRvdy52c3ByaW50Zn0pLnZzcHJpbnRmO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBhbGwgdGhlIHBhcmFtZXRlcnMgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlXG4gICAgLy8gc3ByaW50Zi92c3ByaW50ZiBmdW5jdGlvblxuICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iamVjdCkoYXJnKSAmJiAoMCwgX3V0aWxzLmlzT2JqZWN0KShhcmcuaGFzaCkpIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5oYXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLnB1c2goYXJnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID4gMCA/IF92c3ByaW50Zihmb3JtYXQsIHBhcmFtcykgOiBmb3JtYXQ7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIGxvd2VyY2FzZS5cbiAqIEBleGFtcGxlXG4gKiAgICB7e2xvd2VyY2FzZSAnSlVTVCBXT1chISEnfX0gICA9PiAnanVzdCB3b3chISEnXG4gKlxuICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGxvd2VyY2FzZShwYXJhbSkge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b0xvd2VyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgc3RyaW5nIHRvIHVwcGVyY2FzZS5cbiAqIEBleGFtcGxlXG4gKiAgICB7e3VwcGVyY2FzZSAnanVzdCB3b3chISEnfX0gICA9PiAnSlVTVCBXT1chISEnXG4gKlxuICogQHBhcmFtICBzdHJpbmcgcGFyYW1cbiAqIEByZXR1cm4gc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHVwcGVyY2FzZShwYXJhbSkge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKShwYXJhbSkgPyBwYXJhbS50b1VwcGVyQ2FzZSgpIDogcGFyYW07XG59XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY29sbGVjdGlvbi9hcnJheS5cbiAqIEBleGFtcGxlXG4gKiAgICB2YXIgc29tZUFycmF5ID0gWydEYXZpZCcsICdNaWxsZXInLCAnSm9uZXMnXTtcbiAqICAgIHt7Zmlyc3Qgc29tZUFycmF5fX0gICA9PiAnRGF2aWQnXG4gKlxuICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBmaXJzdChjb2xsZWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX3V0aWxzLmlzQXJyYXkpKGNvbGxlY3Rpb24pIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvblswXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNvbGxlY3Rpb24vYXJyYXkuXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnRGF2aWQnLCAnTWlsbGVyJywgJ0pvbmVzJ107XG4gKiAgICB7e2xhc3Qgc29tZUFycmF5fX0gICA9PiAnSm9uZXMnXG4gKlxuICogQHBhcmFtICBhcnJheSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBsYXN0KGNvbGxlY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkoY29sbGVjdGlvbikgfHwgY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uW2NvbGxlY3Rpb24ubGVuZ3RoIC0gMV07XG59XG5cbi8qKlxuICogQ29uY2F0IHR3byBvciBtb3JlIHN0cmluZ3MuXG4gKiBAZXhhbXBsZVxuICogICAge3tjb25jYXQgJ0hlbGxvJyAnIHdvcmxkJyAnISEhJ319ICAgPT4gJ0hlbGxvIHdvcmxkISEhJ1xuICpcbiAqIEBwYXJhbSAgbWl4ZWQgLi4ucGFyYW1zXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBwYXJhbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgdGhlIG9iamVjdCBhcHBlbmRlZCBieSBoYW5kbGViYXJzLlxuICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KShwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICBwYXJhbXMucG9wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcnKTtcbn1cblxuLyoqXG4gKiBKb2luIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSB1c2luZyBhIGRlbGltZXRlci5cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgdmFyIHNvbWVBcnJheSA9IFsnSGFuZHMnLCAnbGVncycsICdmZWV0J107XG4gKiAgICB7e2pvaW4gc29tZUFycmF5ICcgJiAnfX0gICA9PiAnSGFuZHMgJiBsZWdzICYgZmVldCdcbiAqXG4gKiBAcGFyYW0gIGFycmF5IHBhcmFtc1xuICogQHBhcmFtICBzdHJpbmcgZGVsaW1ldGVyXG4gKiBAcmV0dXJuIHN0cmluZ1xuICovXG5mdW5jdGlvbiBqb2luKHBhcmFtcywgZGVsaW1ldGVyKSB7XG4gICAgaWYgKCFkZWxpbWV0ZXIgfHwgKDAsIF91dGlscy5pc09iamVjdCkoZGVsaW1ldGVyKSkge1xuICAgICAgICBkZWxpbWV0ZXIgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoISgwLCBfdXRpbHMuaXNBcnJheSkocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKGRlbGltZXRlcik7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5leHBvcnRzLmlzRGVmaW5lZCA9IGlzRGVmaW5lZDtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5leHBvcnRzLmlzTnVtZXJpYyA9IGlzTnVtZXJpYztcbi8qKlxuICogQ2hlY2sgaWYgcGFyYW0gaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB0aGluZ1xuICogQHJldHVybnMgYm9vbGVhblxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHRoaW5nKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHBhcmFtIGlzIG5vdCB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzRGVmaW5lZCh0aGluZykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHRoaW5nXG4gKiBAcmV0dXJucyBib29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiAodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0aGluZykpID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBwYXJhbSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0gdGhpbmdcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh0aGluZykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYy5cbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufSJdfQ==
