import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./mainContent";
import ErrorPage from "./components/errorPage";
import ProjectManager from "./components/projectsManager";
import IndexManager from "./components/indexManager";

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
              ],
          }
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;