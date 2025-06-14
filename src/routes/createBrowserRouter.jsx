import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "@pages/home";
import { Unauthorized } from "@pages/unauthorized";
import { ROUTES, PrivateRoute } from "@routes";
import { Crud } from "@pages/crud/components/Crud";
import { Tickets } from "@pages/tickets";
import { Reservation } from "@pages/reservation";
import { Login } from "@pages/login";
import { CrudAxios } from "@pages/crudAxios";
import { ReactQuery } from "@pages/reactQuery";
import { Visa } from "@pages/visa";
import { Trail } from "@pages/trail";

// eslint-disable-next-line no-unused-vars
const createPrivateRoute = (Component) => {
  return (
    <PrivateRoute>
      <Component />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path={ROUTES.HOME} element={createPrivateRoute(Home)} /> */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.TICKETS} element={<Tickets />} />
      <Route path={ROUTES.RESERVATION} element={<Reservation />} />
      <Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
      <Route path={ROUTES.CRUD} element={<Crud />} />
      <Route path={ROUTES.CRUD_AXIOS} element={<CrudAxios />} />
      <Route path={ROUTES.REACT_QUERY} element={<ReactQuery />} />
      <Route path={ROUTES.VISA} element={<Visa />} />
      <Route path={ROUTES.TRAIL} element={<Trail />} />
    </>
  ),
  { basename: "/app" }
);
