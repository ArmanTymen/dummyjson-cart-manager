import { PageLoader } from "@/shared/ui/PageLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const CartListPage = lazy(() => import("@/pages/carts-list-page"));
const CartDetailPage = lazy(() => import("@/pages/cart-details-page"));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <CartListPage />
      </Suspense>
    ),
  },
  {
    path: '/carts/:id',
    element: (
      <Suspense fallback={<PageLoader />}>
        <CartDetailPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  }
]);