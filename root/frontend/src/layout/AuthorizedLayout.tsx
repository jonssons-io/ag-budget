import { useEffect, lazy } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import withSuspense from "../util/hoc/withSuspense";
import MessagePopup from "../util/message/MessagePopup";

const Sidebar = lazy(() => import("./components/Sidebar"));
const CustomHeader = lazy(() => import("./components/CustomHeader"));

const SidebarWithSuspense = withSuspense(Sidebar);
const CustomHeaderWithSuspense = withSuspense(CustomHeader);

export default function AuthorizedLayout() {
  const { userId, isLoaded, isSignedIn, getToken } = useAuth();
  const navigate = useNavigate();

  const { Content } = Layout;
  const ContentWithSuspense = withSuspense(Content);

  console.log("test", userId);
  console.log("loaded", isLoaded);
  console.log("signedin", isSignedIn);

  useEffect(() => {
    if (!userId && isLoaded && !isSignedIn) {
      navigate("/sign-in");
    } else {
      // make get request to get budget data
      getToken().then((token) => {
        fetch("/test", {
          method: "POST",
          // method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // if you need to include a token
          },
          body: JSON.stringify({
            userId,
            token,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }
  }, [isLoaded, isSignedIn, navigate, userId, getToken]);

  if (!isLoaded) return "Loading...";

  return (
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
  );
}
