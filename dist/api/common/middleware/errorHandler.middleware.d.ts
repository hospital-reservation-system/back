import { NextFunction, Request, Response } from "express";
declare function errorHandler(err: Error & {
    statusCode: number;
}, req: Request, res: Response, next: NextFunction): Response | void;
export default errorHandler;
