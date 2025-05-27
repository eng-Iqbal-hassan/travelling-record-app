// import { Navigate } from 'react-router-dom';
// import { ROUTES } from '@routes';
// import { getLocalStorageItem } from '@utils';
// import { ACCESS_TOKEN } from '@constants';

// export function PrivateRoute({ children }) {
//   if (!getLocalStorageItem(ACCESS_TOKEN)) return <Navigate to={ROUTES.UN_AUTHORIZED} replace />;

//   return children;
// }

import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("accessToken");

  return isLoggedIn ? children : <Navigate to='/app/login' replace />;
};
