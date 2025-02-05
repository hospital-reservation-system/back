"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPath = void 0;
/** basePath를 활용해서 라우터 파일에서 사용할 path 추출 */
const extractPath = (path, basePath) => {
    return path.split(basePath || "/s")[1] || "/";
};
exports.extractPath = extractPath;
//# sourceMappingURL=path.util.js.map