declare class HttpException extends Error {
    statusCode: number;
    constructor(statusCode: number, data: string | {
        message: string;
        [key: string]: any;
    });
}
export default HttpException;
