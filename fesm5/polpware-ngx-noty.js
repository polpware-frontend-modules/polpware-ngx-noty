import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastrNotyImplService.ctorParameters = function () { return [
        { type: ToastrService }
    ]; };
    return ToastrNotyImplService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ToastrNotyImplService };

//# sourceMappingURL=polpware-ngx-noty.js.map