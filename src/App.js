import "./styles.css";
import { useEffect, useRef, useState, Fragment } from "react";
import { ContinueWatching, MAIN_DETAILS } from "./util";
import Main from "./Main";
import CustomVideo from "./CustomVideo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    {
      path: ":id",
      element: <CustomVideo/>
    },
  ]);


  return (
    <RouterProvider router={router}>
      <Main/>
    </RouterProvider>
  );
}
