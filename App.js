import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import { ErrorPage } from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

const Instamart = lazy(() => import("./src/components/Instamart"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
