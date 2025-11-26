import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddFood from "../pages/AddFood";
import AllFoods from "../pages/AllFoods";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import FoodDetails from "../pages/FoodDetails";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import MyFoods from "../pages/MyFoods";
import MyOrders from "../pages/MyOrders";
import Purchase from "../pages/Purchase";
import UpdateFood from "../pages/UpdateFood";
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
                path: "all-foods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "gallery",
                element: <Gallery></Gallery>
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
                path: "my-foods",
                element: <PrivateRoute>
                    <MyFoods></MyFoods>
                </PrivateRoute>
            },
            {
                path: "add-food",
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: "update-food/:id",
                element: <PrivateRoute>
                    <UpdateFood></UpdateFood>
                </PrivateRoute>
            }

        ]
    },
]);
export default AppRoute;