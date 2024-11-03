import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export const AppRouterProvider = () => {
  return <RouterProvider router={AppRouter()} />;
};
