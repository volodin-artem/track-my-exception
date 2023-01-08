import "../index.css";
import React from 'react';
import {
  createRoutesFromElements, Route, RouterProvider, Routes,
} from "react-router";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage.jsx";
import Error from "../pages/error/ErrorPage.jsx";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />} errorElement={<Error />}>
        <Route path="/hello" element={<MainPage />} />
      </Route>,
    ),
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
