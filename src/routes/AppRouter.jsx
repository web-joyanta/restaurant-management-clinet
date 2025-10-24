import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Auth from "../Pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";


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
                path: "all-foods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "add-food",
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            
        ]
    },
]);
export default AppRoute;