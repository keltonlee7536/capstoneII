import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Courses from "./Courses";
import StudentHome from "./StudentHome";
import AdminPage from "./AdminPage";

const router = createBrowserRouter([
    {
        path: '/AdminPage',
        element: <AdminPage />
    },
    {
        path: '/StudentHome',
        element: <StudentHome />
    },
    {
        path: '/Courses',
        element: <Courses />
    },
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