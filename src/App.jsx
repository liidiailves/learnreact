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
import Navbar from "./components/Navbar";
import Data, { dataLoader } from "./pages/Data";
import Profile from "./pages/Profile";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Liidia");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/learnreact" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/learnreact/webapis" element={<WebApis />} />
        <Route path="/learnreact/profile" element={<Profile />} />
        <Route path="/learnreact/data" element={<Data />} loader={dataLoader} />
        <Route path="/learnreact/*" element={<h1>Page not found!</h1>} />
      </Route>
    )
  );

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </QueryClientProvider>
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
