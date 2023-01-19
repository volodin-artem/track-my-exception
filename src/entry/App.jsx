import "../index.css";
import React from 'react';
import {
  createRoutesFromElements, Route, RouterProvider, Routes,
} from "react-router";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "../pages/main-page/MainPage.jsx";
import Error from "../pages/error/ErrorPage.jsx";
import Features, { route as features } from "../pages/features/Features.jsx";
import Register, { route as register } from "../pages/register/Register.jsx";
import Login, { route as login } from "../pages/login/Login.jsx";
import MainUserPage, { route as profile } from "../pages/user/main/MainUserPage.jsx";
import Documentation, { route as documentation } from "../pages/documentation/Documentation.jsx";
import Contact, { route as contact } from "../pages/contact/Contact.jsx";
import token from "../user.js";

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />} errorElement={<Error />} />
        <Route path={features.href} element={<Features />} />
        <Route path={login.href} element={<Login />} />
        <Route path={register.href} element={<Register />} />
        <Route path={documentation.href} element={<Documentation />} />
        <Route path={contact.href} element={<Contact />} />
        <Route
          path={profile.href}
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
