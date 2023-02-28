import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';

const router = createBrowserRouter([
    {
        path: '/SignUp',
        element: <SignUp />
    },
    {
        path: '/Login',
        element:  <Login />
    },
    {
        path: '/',
        element: <Navigate replace to="/Login" />
    }
])

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}