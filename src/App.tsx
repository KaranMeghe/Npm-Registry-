import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, HomePage, SearchPage, DetailsPage } from "./Pages";
import { detailsLoader } from "./Pages/DetailsPage/detailsLoader";
import { SearchLoader } from "./Pages/SearchPage/SearchLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: SearchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
