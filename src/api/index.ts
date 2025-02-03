/** 관리자 라우터 */
const ADMIN_ROUTES = {
  ADMIN_API: "/api/admin",
} as const;

// /** 병원 라우터 */
// const HOSPITAL_ROUTES = {
//   HOSPITAL_API: "/api/hospital",
// } as const;

/** 상품 라우터 */
const PRODUCT_ROUTES = {
  PRODUCT_API: "/api/product",
} as const;

/** 선택 상품 라우터 */
const SELECT_PRODUCT_ROUTES = {
  SELECT_PRODUCT_API: "/api/selectProduct",
} as const;

/** 주문 라우터 */
const ORDER_ROUTES = {
  ORDER_API: "/api/order",
} as const;

/** 인증 라우터 */
const AUTH_ROUTES = {
  AUTH_API: "/api/auth",
};

export const ROUTES_INDEX = {
  ...ADMIN_ROUTES,
  // ...HOSPITAL_ROUTES,
  ...PRODUCT_ROUTES,
  ...SELECT_PRODUCT_ROUTES,
  ...ORDER_ROUTES,
  ...AUTH_ROUTES,
} as const;
