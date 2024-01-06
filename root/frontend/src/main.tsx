import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/cssReset.css";
import { Provider as StateProvider } from "jotai";
import { RouterProvider } from "react-router-dom";
import router from "./util/router/browserRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </StrictMode>,
);
