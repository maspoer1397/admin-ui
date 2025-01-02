import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errrorRoute";
import DashboardPage from "./pages/Dashboard";
import BalancePage from "./pages/Balance";
import GoalPage from "./pages/Goals";
import ExpensePage from "./pages/expense";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    },
    {
      path: "/expenses",
      element: <ExpensePage/>
    },
    {
      path: "/goals",
      element: <GoalPage/>
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;