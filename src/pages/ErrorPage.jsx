import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ErrorPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="text-7xl font-extrabold text-custom-orange">404</div>
                <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
                <p className="mt-2 text-sm text-gray-600">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link to="/" className="btn text-white font-medium rounded-md border-0 bg-[#d26f2d] px-6">
                        Go Home
                    </Link>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                    If you think this is an error, please report it to support.
                </p>
            </div>
        </motion.div>
    );
};

export default ErrorPage;
