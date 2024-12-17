import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/product/Products";
import Cart from "./components/product/cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
