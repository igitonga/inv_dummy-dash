import React from "react";
import {useRoutes} from "react-router-dom"
import {Navigate} from "react-router"
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from "./Pages/Dashboard";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Navigate to="/dashboard" />,
        },
        {
            path: "/dashboard",
            element: <Sidebar/>,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />
                }
            ]
        }
    ])
    return routes
}

export default Routes