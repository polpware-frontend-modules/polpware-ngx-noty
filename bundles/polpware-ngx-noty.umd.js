(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-toastr')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-noty', ['exports', '@angular/core', 'ngx-toastr'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-noty'] = {}), global.ng.core, global.ngxToastr));
}(this, function (exports, core, ngxToastr) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // References 
    //   - [ ] https://github.com/scttcper/ngx-toastr
    //
    // This class leverages ngx-toastr to implement the operations in INotyOperations.
    // In order to use this class, the host project must import ngx-toastr.
    var ToastrNotyImplService = /** @class */ (function () {
        function ToastrNotyImplService(_toastr) {
            this._toastr = _toastr;
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ToastrNotyImplService.prototype.success = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            this._toastr.success(message, title, options || {});
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ToastrNotyImplService.prototype.error = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            this._toastr.error(message, title, options || {});
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ToastrNotyImplService.prototype.info = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            this._toastr.info(message, title, options || {});
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ToastrNotyImplService.prototype.warning = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            this._toastr.warning(message, title, options || {});
        };
        ToastrNotyImplService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastrNotyImplService.ctorParameters = function () { return [
            { type: ngxToastr.ToastrService }
        ]; };
        return ToastrNotyImplService;
    }());

    exports.ToastrNotyImplService = ToastrNotyImplService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=polpware-ngx-noty.umd.js.map
