import "../index.css";
import React from 'react';
import {
  createRoutesFromElements, Route, RouterProvider, Routes,
} from "react-router";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "../pages/main-page/MainPage.jsx";
import Error from "../pages/error/ErrorPage.jsx";
import Features, { href as featuresHref } from "../pages/features/Features.jsx";
import Register, { href as registerHref } from "../pages/register/Register.jsx";
import Login, { href as loginHref } from "../pages/login/Login.jsx";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />} errorElement={<Error />} />
        <Route path={featuresHref} element={<Features />} />
        <Route path={loginHref} element={<Login />} />
        <Route path={registerHref} element={<Register />} />
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
