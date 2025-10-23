import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";


const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "auth",
                element: <Auth></Auth>
            },
            {
                path: "add-food",
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            }
        ]
    },
]);
export default AppRoute;