/**
 * AvaCrypt : a JavaScript toolbelt library
 * primary Author: Travis Bergeron
 * lincinced under Eclipse Public License - v 1.0 more info can be found in the LINCINCE file.
 * GitHub repo: https://github.com/MuffinKingStudios/avacrypt
 */
 
/**Todo
 * Increase pi length
 * Optimize type section
 * Add more HTML features
 * Add floating point function
 */

//Define the main object
var $_ = function(obj) {
    if (!(this instanceof $_)) return new $_(obj);
    return obj;
};



$_.version = "0.1.3";


/******************** Variable Defenitions ********************/
var pi = 3.141592653589 
/******************** Math Functions ********************/
$_.average = function() {
    var num = 0;
    for (var i = 0; i < arguments.length; i++) {
        num += arguments[i];
    }
    return num / arguments.length;
};

$_.random = function(min, max) {
    if (max === undefined || max === null) {
        max = min;
        min = 0;
    }
    return Math.floor((Math.random() * (max - min)) + 1) + min;
};

$_.isPositive = function(num) {
    return num > 0;
};

$_.isNegative = function(num) {
    return num < 0;
};

$_.relation = function(num) {
    if (num > 0) return "positive";
    return "negative";
};
/******************** End Math Functions ********************/

/******************** Type Functions ********************/
$_.isString = function(ins) {
    return typeof ins === "string";
};

$_.isNumber = function(ins) {
    return typeof ins === "number";
};

$_.isBoolean = function(ins) {
    return typeof ins === "boolean";
};

$_.isArray = function(ins) {
    return typeof ins === "object" && ins.length !== undefined;
};

$_.isObject = function(ins) {
    return typeof ins === "object" && ins.length === undefined;
};

$_.isFunction = function(ins) {
    return typeof ins === "function";
};

$_.isBinary = function(ins) {
    return ins === true || ins === false || ins === 0 || ins === 1;
};

$_.isUndefined = function(ins) {
    return ins === void 0;
};
/******************** End Type Functions ********************/

/******************** HTML Function ********************/
$_.getElement = function(id) {
    return document.getElementById(id);
};

$_.check = function(ele) {
    if ($_.isString(ele)) ele = $_.getElement(ele);
    ele.checked = true;
    return ele;
};

$_.unCheck = function(ele) {
    if ($_.isString(ele)) ele = $_.getElement(ele);
    ele.checked = false;
    return ele;
};

$_.getValue = function(ele) {
    if ($_.isString(ele)) ele = $_.getElement(ele);
    return ele.value;
};
/******************** End HTML Function ********************/

/******************** Cookie Functions ********************/
