(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-noty', ['exports'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-noty'] = {})));
}(this, (function (exports) { 'use strict';

    /**
     * We on purpose do not make this class to have a root provider.
     * So that the application feels free to set up it.
     */
    var NgxNotyImpl = /** @class */ (function () {
        function NgxNotyImpl() {
        }
        NgxNotyImpl.prototype.success = function (message, title, options) {
        };
        NgxNotyImpl.prototype.error = function (message, title, options) {
        };
        NgxNotyImpl.prototype.info = function (message, title, options) {
        };
        NgxNotyImpl.prototype.warning = function (message, title, options) {
        };
        return NgxNotyImpl;
    }());

    exports.NgxNotyImpl = NgxNotyImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-noty.umd.js.map
