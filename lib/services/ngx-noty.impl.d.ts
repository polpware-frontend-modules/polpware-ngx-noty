import { INgxNoty } from '../interfaces/ngx-noty.interface';
/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
export declare class NgxNotyImpl implements INgxNoty {
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
