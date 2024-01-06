import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../../pages/Dashboard";
import { routerRoutes as routes } from "./routes";
import RootLayout from "../../layout/RootLayout";
import AuthorizedLayout from "../../layout/AuthorizedLayout";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
// import withSuspense from "../hoc/withSuspense";

// const LayoutWithSuspense = withSuspense(Layout);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: routes,
//   },
// ]);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <AuthorizedLayout />,
        path: "/",
        children: routes,
      },
    ],
  },
]);

export default router;
