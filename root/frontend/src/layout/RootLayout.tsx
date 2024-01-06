import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { ClerkProvider } from "@clerk/clerk-react";
import ThemeConfigProvider from "../theme/ThemeConfigProvider";

export default function RootLayout() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ThemeConfigProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Layout style={{ minHeight: "100vh", paddingRight: "1rem" }}>
          <Outlet />
        </Layout>
      </ClerkProvider>
    </ThemeConfigProvider>
  );
}
