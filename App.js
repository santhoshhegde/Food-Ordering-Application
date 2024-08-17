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
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

const Instamart = lazy(() => import("./src/components/Instamart"));
AppLayout = () => {
  const [user, setUser] = useState({
    fName: "Santhosh",
    lName: "Hegde",
    mail: "santhosh@hegde.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
