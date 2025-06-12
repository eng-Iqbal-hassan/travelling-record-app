import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@routes";
import { useSentry, useSetupAxios } from "@services";
import { AppContext } from "@useContext";
import "./global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useSetupAxios();
  useSentry();

  // eslint-disable-next-line no-unused-vars
  const [permissions, setPermissions] = useState("");

  return (
    <AppContext.Provider value={permissions}>
      <RouterProvider router={router} />
      <ToastContainer position='top-right' autoClose={3000} />
    </AppContext.Provider>
  );
}

export default App;
