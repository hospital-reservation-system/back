"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpload = exports.fileUpload = exports.imageUpload = exports.storage = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const multer_1 = __importDefault(require("multer"));
const node_path_1 = __importDefault(require("node:path"));
const uuid_1 = require("uuid");
const dest = node_path_1.default.join(__dirname, "../../public/uploads");
exports.storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        return cb(null, dest);
    },
    filename(req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const fileNameRegex = /(.+)(\..+)/gm;
        const filename = `${file.originalname.replace(fileNameRegex, "$1")}-${(0, uuid_1.v4)()}.${ext}`;
        return cb(null, filename);
    },
});
/** 이미지 업로드 */
exports.imageUpload = (0, multer_1.default)({
    storage: exports.storage,
    fileFilter(req, file, cb) {
        if (!file.mimetype.startsWith("image")) {
            return cb(new http_exception_1.default(400, "이미지 파일만 업로드해라잉"));
        }
        return cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
    },
});
/** 이미지 제외한 파일 업로드 하는 멀터  */
exports.fileUpload = (0, multer_1.default)({
    storage: exports.storage,
    fileFilter(req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            return cb(new http_exception_1.default(400, "이미지 파일은 업로드할 수 없습니다."));
        }
        return cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 10, // 10MB
    },
});
/** 비디오만 업로드 가능하게 하는 멀터 */
exports.videoUpload = (0, multer_1.default)({
    storage: exports.storage,
    fileFilter(req, file, cb) {
        if (!file.mimetype.startsWith("video")) {
            return cb(new http_exception_1.default(400, "비디오 파일만 업로드할 수 있습니다."));
        }
        return cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 50, // 50MB
    },
});
//# sourceMappingURL=multer.js.map