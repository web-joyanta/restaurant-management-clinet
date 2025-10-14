import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            }
        ]
    },
]);
export default AppRoute;