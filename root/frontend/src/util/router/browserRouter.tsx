import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../../pages/Dashboard";
import { routerRoutes as routes } from "./routes";
import Layout from "../../layout/Layout";
// import withSuspense from "../hoc/withSuspense";

// const LayoutWithSuspense = withSuspense(Layout);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
]);

export default router;
