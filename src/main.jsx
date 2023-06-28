import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import CountryDetail from "./components/Countries/CountryDetail.jsx";
import Root from "./layouts/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "", element: <App />},
      {
        path: "/country/:name",
        element: <CountryDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
