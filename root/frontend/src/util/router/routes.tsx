import { RouteObject } from "react-router-dom";
import {
  CalculatorOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import DashboardPageWithSuspense from "../../pages/DashboardPage";
import ExpensesPageWithSuspense from "../../pages/ExpensesPage";
import IncomesPageWithSuspense from "../../pages/IncomesPage";

type SidebarRoute = {
  key: string;
  icon: JSX.Element;
  label: string;
  children?: SidebarRoute[];
};

type Route = {
  index: boolean;
  path: string;
  element: JSX.Element;
};

type RouteWithIcon = Route & SidebarRoute;

export const routesMap: Record<string, RouteWithIcon> = {
  dashboardRoute: {
    key: "/",
    index: true,
    path: "/",
    element: <DashboardPageWithSuspense />,
    icon: <CalculatorOutlined />,
    label: "Översikt",
  },
  incomesRoute: {
    key: "/incomes",
    index: false,
    path: "/incomes",
    element: <IncomesPageWithSuspense />,
    icon: <PlusOutlined />,
    label: "Inkomster",
  },
  expensesRoute: {
    key: "/expenses",
    index: false,
    path: "/expenses",
    element: <ExpensesPageWithSuspense />,
    icon: <MinusOutlined />,
    label: "Utgifter",
  },
};

const routerRoutes: RouteObject[] = Object.values(routesMap).map(
  ({ icon, label, children, ...rest }) => rest,
);

const sidebarRoutes: SidebarRoute[] = Object.values(routesMap).map(
  ({ path, index, element, ...rest }) => rest,
);

export { routerRoutes, sidebarRoutes };
