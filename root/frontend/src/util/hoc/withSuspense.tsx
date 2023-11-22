import { Suspense } from "react";
import { Spin, Flex } from "antd";

export default function withSuspense<P>(
  Component: React.ComponentType<P>,
  loadingFallback?: React.ReactNode,
) {
  // eslint-disable-next-line react/function-component-definition
  const WrappedComponent = (props: P) => (
    <Suspense
      fallback={
        loadingFallback ?? (
          <Flex
            justify="center"
            align="center"
            style={{ height: "100%", width: "100%" }}
          >
            <Spin />
          </Flex>
        )
      }
    >
      <Component key="" {...props} />
    </Suspense>
  );
  return WrappedComponent;
}
