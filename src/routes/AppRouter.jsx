import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../Pages/Auth";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Error Page</h1>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "auth",
                element: <Auth></Auth>
            },
        ]
    },
]);
export default AppRoute;