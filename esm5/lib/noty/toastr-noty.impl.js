/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
export { ToastrNotyImplService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastrNotyImplService.prototype._toastr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLW5vdHkuaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtbm90eS8iLCJzb3VyY2VzIjpbImxpYi9ub3R5L3RvYXN0ci1ub3R5LmltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBUzNDO0lBR0ksK0JBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFDMUMsQ0FBQzs7Ozs7OztJQUVELHVDQUFPOzs7Ozs7SUFBUCxVQUFRLE9BQWUsRUFBRSxLQUFhLEVBQUUsT0FBZ0M7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVELHFDQUFLOzs7Ozs7SUFBTCxVQUFNLE9BQWUsRUFBRSxLQUFhLEVBQUUsT0FBZ0M7UUFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7OztJQUVELG9DQUFJOzs7Ozs7SUFBSixVQUFLLE9BQWUsRUFBRSxLQUFhLEVBQUUsT0FBZ0M7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7OztJQUVELHVDQUFPOzs7Ozs7SUFBUCxVQUFRLE9BQWUsRUFBRSxLQUFhLEVBQUUsT0FBZ0M7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0JBcEJKLFVBQVU7Ozs7Z0JBVEYsYUFBYTs7SUErQnRCLDRCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlkscUJBQXFCOzs7Ozs7SUFFbEIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSU5vdHlPcGVyYXRpb25zIH0gZnJvbSAnLi9ub3R5LmludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcblxyXG4vLyBSZWZlcmVuY2VzIFxyXG4vLyAgIC0gWyBdIGh0dHBzOi8vZ2l0aHViLmNvbS9zY3R0Y3Blci9uZ3gtdG9hc3RyXHJcbi8vXHJcblxyXG4vLyBUaGlzIGNsYXNzIGxldmVyYWdlcyBuZ3gtdG9hc3RyIHRvIGltcGxlbWVudCB0aGUgb3BlcmF0aW9ucyBpbiBJTm90eU9wZXJhdGlvbnMuXHJcbi8vIEluIG9yZGVyIHRvIHVzZSB0aGlzIGNsYXNzLCB0aGUgaG9zdCBwcm9qZWN0IG11c3QgaW1wb3J0IG5neC10b2FzdHIuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHJOb3R5SW1wbFNlcnZpY2UgaW1wbGVtZW50cyBJTm90eU9wZXJhdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvYXN0cjogVG9hc3RyU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG4gICAgICAgIHRoaXMuX3RvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zIHx8IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICAgICAgdGhpcy5fdG9hc3RyLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCBvcHRpb25zIHx8IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZywgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuICAgICAgICB0aGlzLl90b2FzdHIuaW5mbyhtZXNzYWdlLCB0aXRsZSwgb3B0aW9ucyB8fCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcbiAgICAgICAgdGhpcy5fdG9hc3RyLndhcm5pbmcobWVzc2FnZSwgdGl0bGUsIG9wdGlvbnMgfHwge30pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=