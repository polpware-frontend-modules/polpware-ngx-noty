export interface INgxNoty {
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
