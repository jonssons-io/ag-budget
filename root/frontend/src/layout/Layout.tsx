import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import withSuspense from "../util/hoc/withSuspense";
import ThemeConfigProvider from "../theme/ThemeConfigProvider";
import MessagePopup from "../util/message/MessagePopup";

const Sidebar = lazy(() => import("./components/Sidebar"));
const CustomHeader = lazy(() => import("./components/CustomHeader"));

const SidebarWithSuspense = withSuspense(Sidebar);
const CustomHeaderWithSuspense = withSuspense(CustomHeader);

export default function GeneralLayout() {
  const { Content } = Layout;
  const ContentWithSuspense = withSuspense(Content);

  return (
    <ThemeConfigProvider>
      <Layout style={{ minHeight: "100vh", paddingRight: "1rem" }}>
        <SidebarWithSuspense />
        <Layout>
          <CustomHeaderWithSuspense />
          <ContentWithSuspense>
            <MessagePopup />
            <Outlet />
          </ContentWithSuspense>
        </Layout>
      </Layout>
    </ThemeConfigProvider>
  );
}
