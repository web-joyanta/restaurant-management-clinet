import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Purchase from "../pages/Purchase";
import MyOrders from "../pages/MyOrders";

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
                path: "food/:id",
                element: <FoodDetails></FoodDetails>
            },
            {
                path: "food-purchase/:id",
                element: <PrivateRoute>
                    <Purchase></Purchase>
                </PrivateRoute>
            },
            {
                path: "my-orders",
                element: <PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
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