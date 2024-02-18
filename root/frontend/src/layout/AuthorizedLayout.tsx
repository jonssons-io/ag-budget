/* eslint-disable */
import { useEffect, lazy, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Flex, Layout, Spin } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import withSuspense from "../util/hoc/withSuspense";
import MessagePopup from "../util/message/MessagePopup";
import { useGetBudgets } from "../api/hooks/useGetBudgets";

const Sidebar = lazy(() => import("./components/Sidebar"));
const CustomHeader = lazy(() => import("./components/CustomHeader"));

const SidebarWithSuspense = withSuspense(Sidebar);
const CustomHeaderWithSuspense = withSuspense(CustomHeader);

export default function AuthorizedLayout() {
  const { userId, isLoaded, isSignedIn, getToken } = useAuth();
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();
  const {
    data: budgetsData,
    isFetching: isBudgetsFetching,
    error: budgetsError,
    status: budgetsStatus,
  } = useGetBudgets({ token: userToken, enabled: !!userToken });

  const { Content } = Layout;
  const ContentWithSuspense = withSuspense(Content);

  useEffect(() => {
    if (!userId && isLoaded && !isSignedIn) {
      navigate("/sign-in");
    } else {
      // make get request to get budget data
      getToken().then((token) => {
        setUserToken(token ?? "");
      });
    }
  }, [isLoaded, isSignedIn, navigate, userId, getToken]);

  useEffect(() => {
    console.log("fetching: ", isBudgetsFetching);
    console.log("status: ", budgetsStatus);
    console.log("data: ", budgetsData);
    console.log("error: ", budgetsError);
  }, [isBudgetsFetching, budgetsStatus, budgetsData, budgetsError]);

  if (!isLoaded) return "Loading...";

  if (budgetsError) throw budgetsError;

  return (
    <Layout style={{ minHeight: "100vh", paddingRight: "1rem" }}>
      <SidebarWithSuspense />
      <Layout>
        <CustomHeaderWithSuspense />
        <ContentWithSuspense>
          <MessagePopup />
          {isBudgetsFetching ? (
            <Flex
              justify="center"
              align="center"
              style={{ height: "100%", width: "100%" }}
            >
              <Spin size="large" />
            </Flex>
          ) : (
            <Outlet />
          )}
        </ContentWithSuspense>
      </Layout>
    </Layout>
  );
}
