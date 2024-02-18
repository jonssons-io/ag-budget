import { Button } from "antd";

export default function ErrorBoundaryFallback({
  resetErrorBoundary,
}: {
  resetErrorBoundary: (...args: string[]) => void;
}) {
  return (
    <div>
      There was an error in Root Layout!
      <Button onClick={() => resetErrorBoundary()}>Try again</Button>
    </div>
  );
}
