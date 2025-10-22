import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="text-7xl font-extrabold text-custom-orange">404</div>
                <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
                <p className="mt-2 text-sm text-gray-600">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link to="/" className="btn btn-orange px-6">
                        Go Home
                    </Link>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                    If you think this is an error, please report it to support.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
