import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import WebApis from "./pages/WebApis";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Data, { dataLoader } from "./pages/Data";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/learnreact" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/learnreact/webapis" element={<WebApis />} />
        <Route path="/learnreact/menu" element={<Menu />} />
        <Route path="/learnreact/data" element={<Data />} loader={dataLoader} />
        <Route path="/learnreact/*" element={<h1>Page not found!</h1>} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
