import { INotyOperations } from './noty.interface';
import { ToastrService } from 'ngx-toastr';
export declare class ToastrNotyImplService implements INotyOperations {
    private _toastr;
    constructor(_toastr: ToastrService);
    success(message: string, title: string, options?: {
        [key: string]: any;
    }): void;
    error(message: string, title: string, options?: {
        [key: string]: any;
    }): void;
    info(message: string, title: string, options?: {
        [key: string]: any;
    }): void;
    warning(message: string, title: string, options?: {
        [key: string]: any;
    }): void;
}
