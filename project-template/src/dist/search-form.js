"use strict";
exports.__esModule = true;
exports.renderSearchFormBlock = void 0;
var lib_js_1 = require("./lib.js");
function renderSearchFormBlock() {
    var currentDate = new Date().toISOString().slice(0, 10);
    var arrivalDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 10);
    var departureDate = new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().slice(0, 10);
    var date = new Date();
    var lastDayDate = new Date(date.getFullYear(), date.getMonth() + 2, +1);
    var lastDay = lastDayDate.toISOString().slice(0, 10);
    console.log(currentDate);
    lib_js_1.renderBlock('search-form-block', "\n    <form>\n      <fieldset class=\"search-filedset\">\n        <div class=\"row\">\n          <div>\n            <label for=\"city\">\u0413\u043E\u0440\u043E\u0434</label>\n            <input id=\"city\" type=\"text\" disabled value=\"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\" />\n            <input type=\"hidden\" disabled value=\"59.9386,30.3141\" />\n          </div>\n          <!--<div class=\"providers\">\n            <label><input type=\"checkbox\" name=\"provider\" value=\"homy\" checked /> Homy</label>\n            <label><input type=\"checkbox\" name=\"provider\" value=\"flat-rent\" checked /> FlatRent</label>\n          </div>--!>\n        </div>\n        <div class=\"row\">\n          <div>\n            <label for=\"check-in-date\">\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430</label>\n            <input id=\"check-in-date\" type=\"date\" value=\"" + arrivalDate + "\" min=\"" + currentDate + "\" max=\"" + lastDay + "\" name=\"checkin\" />\n          </div>\n          <div>\n            <label for=\"check-out-date\">\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430</label>\n            <input id=\"check-out-date\" type=\"date\" value=\"" + departureDate + "\" min=\"" + arrivalDate + "\" max=\"" + lastDay + "\" name=\"checkout\" />\n          </div>\n          <div>\n            <label for=\"max-price\">\u041C\u0430\u043A\u0441. \u0446\u0435\u043D\u0430 \u0441\u0443\u0442\u043E\u043A</label>\n            <input id=\"max-price\" type=\"text\" value=\"\" name=\"price\" class=\"max-price\" />\n          </div>\n          <div>\n            <div><button>\u041D\u0430\u0439\u0442\u0438</button></div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    ");
}
exports.renderSearchFormBlock = renderSearchFormBlock;
