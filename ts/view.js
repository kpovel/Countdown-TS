"use strict";
exports.__esModule = true;
exports.showResultCountdown = exports.UI_ELEMENTS = void 0;
var js_cookie_1 = require("js-cookie");
var date_fns_1 = require("date-fns");
exports.UI_ELEMENTS = {
    DATE: document.getElementById('date'),
    SUBMIT: document.getElementById('submit'),
    RESULT: document.getElementById('result')
};
function showResultCountdown(selectedDate, countdown) {
    var result = "Until ".concat(selectedDate, " left ").concat(countdown);
    js_cookie_1["default"].set('lastResult', result, { expires: (0, date_fns_1.addHours)(Date.now(), 1) });
    exports.UI_ELEMENTS.RESULT.textContent = result;
}
exports.showResultCountdown = showResultCountdown;
function showLastResultOnReload() {
    if (js_cookie_1["default"].get('lastResult')) {
        exports.UI_ELEMENTS.RESULT.textContent = js_cookie_1["default"].get('lastResult');
    }
}
showLastResultOnReload();
