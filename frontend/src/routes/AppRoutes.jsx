import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthPage from "../features/auth/UI/pages/AuthPage.jsx";
import AuthLayout from "../app/layout/AuthLayout.jsx";
import { useEffect } from "react";
import api from "../app/api/api.jsx";
import { useDispatch } from "react-redux";
import { addUser, isLoding } from "../features/auth/state/authSlice.jsx";
import LoginProtected from "./protectedRoute/LoginProtected.jsx";
import HomeProtected from "./protectedRoute/HomeProtected.jsx";
import MainLayout from "../app/layout/MainLayout.jsx";
import HomePage from "../features/home/UI/pages/HomePage.jsx";
import ProductPage from "../features/product/UI/pages/ProductPage.jsx";
import ProductDetailsPage from "../features/product/UI/pages/ProductDetailPage.jsx";
import CartDrawer from "../features/cart/UI/pages/CartDrawer.jsx";
import { getCartApi } from "../features/cart/api/cartApi.jsx";
import { addAllProduct } from "../features/cart/state/cartSlice.jsx";
import useCart from "../features/cart/hook/cartHook.jsx";
import ProductUploadPage from "../features/upload/UI/pages/ProductUploadPage.jsx";
import SellerProtected from "./protectedRoute/SellerProtected.jsx";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const {getAllProductInCart, setCartProduct} = useCart()
  const getMe = async () => {
    try {
      const res = await api.get("/auth/me");
    //   console.log(res);
      dispatch(addUser(res.data.data));
    } catch (error) {
        dispatch(isLoding(false))
        console.log(error);
    }
  };

  

  useEffect(() => {
    getMe();
    setCartProduct();
    getAllProductInCart()
  }, []);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <AuthPage />,
            },
          ],
        },
      ],
    },
    {
        path: '/',
        element: <HomeProtected />,
        children: [
            {
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        path: '',
                        element: <HomePage />
                    },
                    {
                      path: '/products',
                      element: <ProductPage />,
                    },
                    {
                      path: '/products/:id',
                      element: <ProductDetailsPage />
                    },
                    {
                      path: '/cart',
                      element: <CartDrawer />
                    },
                    {
                      path: '/seller',
                      element: <SellerProtected />,
                      children: [
                        {
                          path: '',
                          element: <ProductUploadPage />
                        }
                      ]
                    }
                ]
            }
        ]
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
