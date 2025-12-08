import { useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAuthObserver = () => {
    const axiosSecure = useAxiosSecure();
    const { user, setLoading } = useAuth();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.post("/login", { email: user.email })
            .then(() => {
                setLoading(false);
            });
        } else {
            axiosSecure.post("/logout", {})
            .then(() => {
                setLoading(false);
            });
        }

    }, [user, axiosSecure, setLoading]);
};

export default useAuthObserver;
