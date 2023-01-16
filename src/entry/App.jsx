import "../index.css";
import React from 'react';
import {
  createRoutesFromElements, Route, RouterProvider, Routes,
} from "react-router";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "../pages/main-page/MainPage.jsx";
import Error from "../pages/error/ErrorPage.jsx";
import Features, { route as featuresHref } from "../pages/features/Features.jsx";
import Register, { route as registerHref } from "../pages/register/Register.jsx";
import Login, { route as loginHref } from "../pages/login/Login.jsx";
import MainUserPage, { route as profileHref } from "../pages/user/main/MainUserPage.jsx";
import token from "../user.js";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />} errorElement={<Error />} />
        <Route path={featuresHref.href} element={<Features />} />
        <Route path={loginHref.href} element={<Login />} />
        <Route path={registerHref.href} element={<Register />} />
        <Route
          path={profileHref.href}
          element={<MainUserPage />}
        />
      </>,
    ),
  );
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
