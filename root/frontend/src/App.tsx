import { Provider as StateProvider } from "jotai";
import { RouterProvider } from "react-router-dom";
import router from "./util/router/browserRouter";

function App() {
  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  );
}

export default App;
