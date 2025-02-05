"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("@/api/index");
const admin_router_1 = __importDefault(require("@/api/admin/router/admin.router"));
const product_router_1 = __importDefault(require("@/api/product/router/product.router"));
const selectProduct_router_1 = __importDefault(require("@/api/selectProduct/router/selectProduct.router"));
const order_router_1 = __importDefault(require("@/api/order/router/order.router"));
const auth_router_1 = __importDefault(require("@/api/auth/router/auth.router"));
const errorHandler_middleware_1 = __importDefault(require("./api/common/middleware/errorHandler.middleware")); // errorhandler
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)({
    // 프론트엔드의 도메인
    origin: "http://localhost:3000",
    // 쿠키 전송 허용
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use("/static", express_1.default.static(node_path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
/** product router */
app.use(index_1.ROUTES_INDEX.PRODUCT_API, product_router_1.default);
/** admin router */
app.use(index_1.ROUTES_INDEX.ADMIN_API, admin_router_1.default);
/** select product router */
app.use(index_1.ROUTES_INDEX.SELECT_PRODUCT_API, selectProduct_router_1.default);
/** order router */
app.use(index_1.ROUTES_INDEX.ORDER_API, order_router_1.default);
/** auth router */
app.use(index_1.ROUTES_INDEX.AUTH_API, auth_router_1.default);
app.use(errorHandler_middleware_1.default);
app.listen(port, () => {
    console.log(`SERVER started at http://localhost:${port} ^-^`);
});
//# sourceMappingURL=app.js.map