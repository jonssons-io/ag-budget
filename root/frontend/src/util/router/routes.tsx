import { RouteObject } from "react-router-dom";
import {
  CalculatorOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import DashboardWithSuspense from "../../pages/Dashboard";
import ExpensesWithSuspense from "../../pages/Expenses";
import IncomesWithSuspense from "../../pages/Incomes";

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
    element: <DashboardWithSuspense />,
    icon: <CalculatorOutlined />,
    label: "Översikt",
  },
  incomesRoute: {
    key: "/incomes",
    index: false,
    path: "/incomes",
    element: <IncomesWithSuspense />,
    icon: <PlusOutlined />,
    label: "Inkomster",
  },
  expensesRoute: {
    key: "/expenses",
    index: false,
    path: "/expenses",
    element: <ExpensesWithSuspense />,
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
