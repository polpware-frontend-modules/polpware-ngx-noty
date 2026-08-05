interface INgxNoty {
    success(message: string, title: string, options?: {
        [key: string]: any;
    }): any;
    error(message: string, title: string, options?: {
        [key: string]: any;
    }): any;
    info(message: string, title: string, options?: {
        [key: string]: any;
    }): any;
    warning(message: string, title: string, options?: {
        [key: string]: any;
    }): any;
}

/**
 * We on purpose do not make this class to have a root provider.
 * So that the application feels free to set up it.
 */
declare class NgxNotyImpl implements INgxNoty {
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

export { NgxNotyImpl };
export type { INgxNoty };
