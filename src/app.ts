import express from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import { ROUTES_INDEX } from "@/api/index";

import adminRouter from "@/api/admin/router/admin.router";
import productRouter from "@/api/product/router/product.router";
import selectProductRouter from "@/api/selectProduct/router/selectProduct.router";
import orderRouter from "@/api/order/router/order.router";
import authRouter from "@/api/auth/router/auth.router";
import errorHandler from "./api/common/middleware/errorHandler.middleware"; // errorhandler

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    // 프론트엔드의 도메인
    // origin: "http://localhost:3000",
    origin: "https://hospital-back.fly.dev",

    // 쿠키 전송 허용
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/** product router */
app.use(ROUTES_INDEX.PRODUCT_API, productRouter);

/** admin router */
app.use(ROUTES_INDEX.ADMIN_API, adminRouter);

/** select product router */
app.use(ROUTES_INDEX.SELECT_PRODUCT_API, selectProductRouter);

/** order router */
app.use(ROUTES_INDEX.ORDER_API, orderRouter);

/** auth router */
app.use(ROUTES_INDEX.AUTH_API, authRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`SERVER started at http://localhost:${port} ^-^`);
});
