import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./mainContent";
import ErrorPage from "./components/errorPage";
import Index from "./components";
import Projects from "./components/projects";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <MainContent />,
        errorElement: <ErrorPage />,
        children: [
          {
              errorElement: <ErrorPage />,
              children: [
                  {index: true, element: <Index />},
                  {
                    path: "projects",
                    element: <Projects />
                  },
              ],
          }
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;