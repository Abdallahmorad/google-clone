import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

import Results from "./components/Results";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Results />,
        },
        {
          path: "/search",
          element: <Results />,
        },
        {
          path: "/videos",
          element: <Results />,
        },
        {
          path: "/news",
          element: <Results />,
        },
        {
          path: "/images",
          element: <Results />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
