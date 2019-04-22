import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
class ToastrNotyImplService {
    /**
     * @param {?} _toastr
     */
    constructor(_toastr) {
        this._toastr = _toastr;
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    success(message, title, options) {
        this._toastr.success(message, title, options || {});
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    error(message, title, options) {
        this._toastr.error(message, title, options || {});
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    info(message, title, options) {
        this._toastr.info(message, title, options || {});
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    warning(message, title, options) {
        this._toastr.warning(message, title, options || {});
    }
}
ToastrNotyImplService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastrNotyImplService.ctorParameters = () => [
    { type: ToastrService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ToastrNotyImplService };
//# sourceMappingURL=polpware-ngx-noty.js.map
