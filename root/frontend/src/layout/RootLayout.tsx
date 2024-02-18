import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClientProvider } from "@tanstack/react-query";
import ThemeConfigProvider from "../theme/ThemeConfigProvider";
import queryClient from "../api/queryClient";

export default function RootLayout() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ThemeConfigProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <Layout style={{ minHeight: "100vh", paddingRight: "1rem" }}>
            <Outlet />
          </Layout>
        </QueryClientProvider>
      </ClerkProvider>
    </ThemeConfigProvider>
  );
}
