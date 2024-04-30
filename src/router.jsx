import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./mainContent";
import ErrorPage from "./components/errorPage";
import ProjectManager from "./components/projectsManager";
import IndexManager from "./components/indexManager";
import AboutManager from "./components/aboutManager";

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
                  {index: true, element: <IndexManager />},
                  {
                    path: "projects",
                    element: <ProjectManager />
                  },
                  {
                    path: "about",
                    element: <AboutManager />
                  },
              ],
          }
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;