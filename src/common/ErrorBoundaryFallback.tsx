import { FallbackProps } from "react-error-boundary";

export const ErrorBoundaryFallback = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <h5>Something went wrong:</h5>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};
