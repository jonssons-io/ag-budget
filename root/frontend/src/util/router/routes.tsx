import { RouteObject } from "react-router-dom";
import {
  AppstoreAddOutlined,
  FundViewOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import DashboardPageWithSuspense from "../../pages/DashboardPage";
import ExpensesPageWithSuspense from "../../pages/ExpensesPage";
import IncomesPageWithSuspense from "../../pages/IncomesPage";
import BudgetSettingsPage from "../../pages/BudgetSettingsPage";

export const routesMap: Record<string, RouteObject> = {
  dashboardRoute: {
    index: true,
    path: "/",
    element: <DashboardPageWithSuspense />,
  },
  incomesRoute: {
    index: false,
    path: "/incomes",
    element: <IncomesPageWithSuspense />,
  },
  expensesRoute: {
    index: false,
    path: "/expenses",
    element: <ExpensesPageWithSuspense />,
  },
  budgetSettingsRoute: {
    path: "/settings/budget",
    index: false,
    element: <BudgetSettingsPage />,
  },
};

type MenuItemsType = {
  label: string;
  key: string;
  icon: React.ReactNode;
  type: "divider" | "group" | "link";
  children?: MenuItemsType[];
};

const sidebarItemsMap: MenuItemsType[] = [
  { label: "Översikt", key: "/", icon: <FundViewOutlined />, type: "link" },
  { label: "Inkomster", key: "/incomes", icon: <PlusOutlined />, type: "link" },
  {
    label: "Utgifter",
    key: "/expenses",
    icon: <MinusOutlined />,
    type: "link",
  },
  { type: "divider", label: "", key: "no-route-first-divider", icon: null },
  {
    label: "Inställningar",
    key: "no-route-settings",
    type: "group",
    icon: null,
    children: [
      {
        label: "Budget",
        key: "/settings/budget",
        icon: <AppstoreAddOutlined />,
        type: "link",
      },
    ],
  },
];

const routerRoutes: RouteObject[] = Object.values(routesMap).map(
  ({ children, ...rest }) => rest,
);

export { routerRoutes, sidebarItemsMap };
