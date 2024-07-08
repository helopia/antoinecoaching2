import { RouterProvider } from "react-router-dom";
import { router } from "./router/rooter";
import "./App.css";


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;