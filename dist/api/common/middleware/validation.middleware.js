"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const yup = __importStar(require("yup"));
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
/** 모든 요청 validate 체크 */
const validate = (schema) => async (req, __, next) => {
    try {
        if (schema instanceof yup.ObjectSchema) {
            await schema.validate?.({
                body: req.body,
                path: req.params,
                params: req.query,
            });
        }
        else {
            await schema?.body?.validate?.(req.body);
            await schema?.path?.validate?.(req.params);
            await schema?.params?.validate?.(req.query);
        }
        return next();
    }
    catch (error) {
        next(new http_exception_1.default(400, error.message));
    }
};
exports.validate = validate;
//# sourceMappingURL=validation.middleware.js.map