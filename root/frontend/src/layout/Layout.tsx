import { lazy } from "react";
import { Layout } from "antd";
import withSuspense from "../util/hoc/withSuspense";

const Sidebar = lazy(() => import("./components/Sidebar"));
const CustomHeader = lazy(() => import("./components/CustomHeader"));

const SidebarWithSuspense = withSuspense(Sidebar);
const CustomHeaderWithSuspense = withSuspense(CustomHeader);

export default function GeneralLayout({
  darkMode,
  handleChangeMode,
}: {
  darkMode: boolean;
  handleChangeMode: () => void;
}) {
  const { Content } = Layout;

  const ContentWithSuspense = withSuspense(Content);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarWithSuspense />
      <Layout>
        <CustomHeaderWithSuspense
          darkMode={darkMode}
          handleChangeMode={handleChangeMode}
        />
        <ContentWithSuspense>
          <p>Content</p>
        </ContentWithSuspense>
      </Layout>
    </Layout>
  );
}
