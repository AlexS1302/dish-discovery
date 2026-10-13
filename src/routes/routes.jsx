import App from "../App/App";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import HomePage from "../components/Pages/HomePage/HomePage";

const routes = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routes;
