import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // Show loading spinner while authentication status is being determined
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <span className="loading loading-spinner text-orange-500 text-9xl"></span>
            </div>
        )
    }
    // If user is authenticated, render the child components
    if (user) {
        return children;
    }

    // If user is not authenticated, redirect to the login page
    return <Navigate to="/auth" state={location.pathname}></Navigate>

};

export default PrivateRoute;