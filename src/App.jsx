import { useState } from "react";

import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import AuthContextProvider from "./Context/AuthContext";
import Layout from "./assets/Layout/Layout";
import ReportedVideos from "./Components/ReportedVideos/ReportedVideos";
import AllVideos from "./Components/AllVideos/AllVideos";
import GetUser from "./Components/GetUser/GetUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllVideos />,
      },
      {
        path: "reported",
        element: <h1>Reported</h1>,
      },
      {
        path: "GetUser",
        element: <GetUser />,
      }
    ]
  }
]);
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
